// We import Chai to use its asserting functions here.
const { expect } = require("chai");
const {
  EPNS_ADVISORS_FUNDS_AMOUNT,
  TOTAL_EPNS_TOKENS,
} = require("../scripts/constants");

// `describe` is a Mocha function that allows you to organize your tests. It's
// not actually needed, but having your tests organized makes debugging them
// easier. All Mocha functions are available in the global scope.

// `describe` receives the name of a section of your test suite, and a callback.
// The callback must define the tests of that section. This callback can't be
// an async function.
describe("$PUSH Token contract", function () {
  // Mocha has four functions that let you hook into the the test runner's
  // lifecyle. These are: `before`, `beforeEach`, `after`, `afterEach`.

  // They're very useful to setup the environment for tests, and to clean it
  // up after they run.

  // A common pattern is to declare some variables, and assign them in the
  // `before` and `beforeEach` callbacks.

  let Token;
  let epnsToken;
  let owner;
  let addr1;
  let addr2;
  let addrs;
  let start;

  // `beforeEach` will run before each test, re-deploying the contract every
  // time. It receives a callback, which can be async.
  beforeEach(async function () {
    Token = await ethers.getContractFactory("EPNS");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    // To deploy our contract, we just have to call Token.deploy() and await
    // for it to be deployed(), which happens onces its transaction has been
    // mined.
    epnsToken = await Token.deploy(owner.address);
    // Run the ERC 20 Test Suite
    const now = (await ethers.provider.getBlock()).timestamp;
    start = now + 60;
    cliffDuration = 31536000; // 1 Year
    duration = cliffDuration + 31536000; // 2 Years
  });

  // You can nest describe calls to create subsections.
  describe("Vesting Contracts Tests", function () {
    let EPNSAdvisors;
    let epnsAdvisors;
    // `it` is another Mocha function. This is the one you use to define your
    // tests. It receives the test name, and a callback function.
    describe("EPNSAdvisors Deployment", function () {
      beforeEach(async function () {
        // Get the ContractFactory and Signers here.
        EPNSAdvisors = await ethers.getContractFactory("EPNSAdvisors");

        // To deploy our contract, we just have to call Token.deploy() and await
        // for it to be deployed(), which happens onces its transaction has been
        // mined.
        epnsAdvisors = await EPNSAdvisors.deploy(
          epnsToken.address,
          start,
          cliffDuration
        );
        epnsToken.transfer(
          epnsAdvisors.address,
          ethers.BigNumber.from(EPNS_ADVISORS_FUNDS_AMOUNT)
        );
        // Run the ERC 20 Test Suite
      });
      it("Should deploy EPNSAdvisors Token", async function () {
        expect(epnsToken.address).to.not.equal(null);
      });

      it("Should revert when trying to put in zero address for pushtoken", async function () {
        const epnsAdvisorsInstance = EPNSAdvisors.deploy(
          "0x0000000000000000000000000000000000000000",
          start,
          cliffDuration
        );

        expect(epnsAdvisorsInstance).to.be.revertedWith(
          "Push::constructor: pushtoken is the zero address"
        );
      });

      it("Should revert when trying to set cliff Duration 0", async function () {
        const epnsAdvisorsInstance = EPNSAdvisors.deploy(
          epnsToken.address,
          start,
          0
        );

        expect(epnsAdvisorsInstance).to.be.revertedWith(
          "Push::constructor: cliff duration is 0"
        );
      });

      it("Should revert when trying to set cliff time before current time", async function () {
        const oldDate = Math.floor(new Date("1 JAN 2020") / 1000);
        const oneMinuteCliff = 60;
        const epnsAdvisorsInstance = EPNSAdvisors.deploy(
          epnsToken.address,
          oldDate,
          oneMinuteCliff
        );

        expect(epnsAdvisorsInstance).to.be.revertedWith(
          "Push::constructor: cliff time is before current time"
        );
      });

      it("Should assign sum of start and cliff duration to cliff of contract", async function () {
        const cliff = await epnsAdvisors.cliff();
        expect(cliff).to.equal(start + cliffDuration);
      });

      it("Should assign push token address to contract", async function () {
        const pushAddress = await epnsAdvisors.pushToken();
        expect(pushAddress).to.equal(epnsToken.address);
      });

      it("Should deploy a advisor vesting contract", async function () {
        const tx = await epnsAdvisors.deployAdvisor(
          addr1.address,
          start,
          cliffDuration,
          duration,
          true,
          ethers.BigNumber.from(EPNS_ADVISORS_FUNDS_AMOUNT)
        );
        expect(tx);
      });

      it("Should rekove the advisor contract by owner and get tokens refunded", async function () {
        await epnsAdvisors.deployAdvisor(
          addr1.address,
          start,
          cliffDuration,
          duration,
          true,
          ethers.BigNumber.from(EPNS_ADVISORS_FUNDS_AMOUNT)
        );
        const eventEmitted = (
          await epnsAdvisors.queryFilter("DeployAdvisor")
        )[0];

        await epnsAdvisors.revokeAdvisorTokens(
          eventEmitted.args.advisorAddress
        );

        const balance = (
          await epnsToken.balanceOf(epnsAdvisors.address)
        ).toString();

        expect(balance).to.be.equal(EPNS_ADVISORS_FUNDS_AMOUNT);
      });

      it("Should revert when trying to withdraw tokens before cliff time", async function () {
        const balanceAdvisors = (
          await epnsToken.balanceOf(epnsAdvisors.address)
        ).toString();
        const tx = epnsAdvisors.withdrawTokens(balanceAdvisors);

        expect(tx).to.be.revertedWith(
          "Push::withdrawTokens: cliff period not complete"
        );
      });

      it("Should transfer tokens to owner when withdrawing after cliff time", async function () {
        await ethers.provider.send("evm_setNextBlockTimestamp", [
          start + cliffDuration + 86400, // 1 Day after cliffDuration
        ]);

        const balanceAdvisors = (
          await epnsToken.balanceOf(epnsAdvisors.address)
        ).toString();
        const tx = await epnsAdvisors.withdrawTokens(balanceAdvisors);
        const balanceOwner = (
          await epnsToken.balanceOf(owner.address)
        ).toString();
        await ethers.provider.send("evm_mine");
        expect(balanceOwner).to.be.equal(TOTAL_EPNS_TOKENS);
      });
    });
  });
});
