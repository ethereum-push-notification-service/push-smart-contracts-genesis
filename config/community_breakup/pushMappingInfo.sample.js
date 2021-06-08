const pushUsersMapping = {
	user1: ['0x057fcD7BD66e0b0e7CBF387D12b2A49A20d30922', '0.1324598286'],
	user2: ['0x325cAf6580dd8364D988677e26bf53E7E23635b4', '194.4274071'],
	user3: ['0x21a2adC60c315eF81dC06045CA9D16814AE4478d', '36.03058806'],
	user4: ['0x878BF0AA2733d0Ba56fE0ACB24a81322B083BA31', '31.18899489'],
	user5: ['0x53c0fa070E310CE1690B3c83b2aB7F20D74D4922', '537.6661774'],
	user6: ['0xAa9c52276069B58227697805F24707e175313351', '147.8011123'],
	user7: ['0xAB69B3c138e9252D6b5f0021240620A2e5e40524', '112.0130258'],
	user8: ['0x16B0e4Ad0B7287341E8436F335b558d168DD0985', '0'],
	user9: ['0xe67163ab11D4b39C5616bD84BbdF8eFbDF7a5D00', '0'],
	user10: ['0xfc655427c568bcb837c05Cec13e4956524cA83E0', '40.62466039'],
	user11: ['0x1f5295fDf5861D651Ac176DB47ad5518ac085C80', '214.2743615'],
	user12: ['0xe5782fa93187334169052b61cAEa7d9bF9d508b1', '147.7097124'],
	user13: ['0x5eC5e26D5304EF62310b5bC46A150d15E144e122', '0'],
	user14: ['0x7EA17E0B23aF81b43C188ce8a92E9c98FD204880', '111.2622473'],
	user15: ['0x91212de083d29342F670FB69Ffa68176369e3B20', '64.00780152'],
	user16: ['0x980a4d296Bd6898A86F015b27F59A75d6Dba3AE9', '8.747732874'],
	user17: ['0x1F67DDe8d78f4247393e4A8FEb21061e19e5f158', '0'],
	user18: ['0x7E7fDfCA8884483cd147A3437893a6cF3f4208A2', '0'],
	user19: ['0x2c7e03BC59E05b2Ab1D5868de00B4eFFCC32eFf8', '902.1291443'],
	user20: ['0x83F297e5D05c6abec82FA8c96bd7dd3418ef7391', '21.22624033'],
	user21: ['0xCb2e9Be6D5f66B011B19c57d1bD2b7d8E6cB62e0', '27.77689088'],
	user22: ['0x207886A07bd68082A340bc319B154AcC96cA820c', '0'],
	user23: ['0x0eCa97cA516744301B6314538D78e9fEF1c6eFeA', '18.83194131'],
	user24: ['0x60354A6b795ED9634860a3f28a35b1efA6990512', '19.67034443'],
	user25: ['0x5E8c6d1B31C681f0759E86F186C085B1e00195BC', '27.774868'],
	user26: ['0x87BdB4879138276E241116d54c7f67C3bb375593', '63.26573149'],
	user27: ['0xe90B4aA6002E263031E9A05d50CE8709B9F92fa8', '63.23492116'],
	user28: ['0x358A906Ca407a35DE33B930AA7Cf49A301A4DEF1', '126.3272626'],
	user29: ['0x51c25230335472236853676290062c8C7a0825b6', '278.919934'],
	user30: ['0x2247c530B78Dac20E9d096d03E7904649977cEAA', '467.4930814'],
	user31: ['0xb4B1243F54ec305b9A98d0CC8ACc5A0bD1af6DCC', '44.70242414'],
	user32: ['0xc9868101505f0d775aCd6187A233F8F0f741b311', '0.0462188022'],
	user33: ['0x633749E3ac442bCF3Eb09DB428D22EeBE5656a99', '0'],
	user34: ['0x368Ccf1d8685b3d1aDb8ca411F43D64c000a7d42', '25.64468177'],
	user35: ['0x1541aFb862b70B5C2c554810De87B035595b26ba', '109.2932031'],
	user36: ['0x6a683b1BE8765bF59039507F5564F7B4c2B241A3', '115.1440967'],
	user37: ['0xA07A694728680AafF26f84305ac6302128134305', '0'],
	user38: ['0xc14eF3c3BC58BF24670E7636b53F136fb0433b2d', '108.8376036'],
	user39: ['0xA9fb88A4066298548570bDD8AD2D1A773326765d', '5.217707247'],
	user40: ['0x43a89e027E11a84239139BD8E7972d6b5D3fF264', '41.7242862'],
	user41: ['0x449A7E1C10D2a0F68243FE104f9330fE16FeFe1A', '0'],
	user42: ['0x8613017807c38bB4134628d2D4BB7A6Ab043C48a', '0'],
	user43: ['0xa11F83cbb07FD0327415BD424b986132E009F643', '32.80938763'],
	user44: ['0x62661B101ca48734668669a9F1Cb83c4889049F3', '61.84485092'],
	user45: ['0x99Cc0DE7B4735c0A2aC9987F77820490313FF000', '32.3516636'],
	user46: ['0x3A0b433cDF858a29f3f31426D14dD5264700BD77', '107.0980676'],
	user47: ['0xF26E5B93453a69a0297Dc66e7bbD750d2B28160B', '168.8928665'],
	user48: ['0x34d4ECD77D6378EbddA1C62A38881E4587109181', '0'],
	user49: ['0x164666039Ee97b1201eB3856Fd8f7Da23d6B5cEA', '25.63771667'],
	user50: ['0x20bAaD48A5508342F416C552265c71EA059373D3', '44.01640528'],
	user51: ['0x7BFEe91193d9Df2Ac0bFe90191D40F23c773C060', '61.3751573'],
	user52: ['0xCE964f5E2Bd01608d17707B438C505a702b5E318', '0'],
	user53: ['0x0f07EBbd719C9aAd480AcE5f6aA2c044E92380Ac', '46.66072424'],
	user54: ['0xAc5F6Ad16b9BA91D652fAec3093e49BE689fE7A5', '61.19439245'],
	user55: ['0x642d9F5Ba5fc0664eCE65Bf8A4179E6ef3aCC876', '611.6459267'],
	user56: ['0xe61095Bc534A58F9b69a322F49FD71e92a77363f', '101.5965113'],
	user57: ['0x181BCe411aD443FcFd74fd088326469Ad4DcA3eb', '208.9533338'],
	user58: ['0xd5f61EDD89DE23b27306eD6754Bc8B4209335559', '25.64988429'],
	user59: ['0x825701B149fB22105CD470E4a1ba0fa77c94Ff81', '1476.907448'],
	user60: ['0x8B73b825f9a2b22BCFee3C7673b1AE704B081304', '199.1236259'],
	user61: ['0x2dBC54D6993a1db9BE6431292036641Ec73E8C70', '103.6953086'],
	user62: ['0x3935b8D9183192127Ea42dE420f8E771043b3764', '114.1079219'],
	user63: ['0x9f9433aa66A6E130D45bAc7c6754d859C030c897', '495.0677574'],
	user64: ['0x2ed2E8DBF7a599C9d3Ac0E706757C474B22aD082', '0'],
	user65: ['0x5dB29fE8E34dF7Dc8B3F75c322859a03F43Af83f', '246.6656311'],
	user66: ['0x8e97eaa8EE529d9bc3A74449848B18b909e7F8ee', '25.24883256'],
	user67: ['0x8185dDFCF81A87977d1B16c68106c30FfF9F2490', '7.554606735'],
	user68: ['0x9aC41e441131d8BAD5f165c2a8dd71e5F7BfaEA8', '32.32155033'],
	user69: ['0x63BB46461696416Fac820Bf871375274d97b128e', '391.7523182'],
	user70: ['0x1738529CbC8BdBDcf7B5B40B77f24C3982Ec5Deb', '235.133937'],
	user71: ['0x0103a4966daba5a947df52b0B892d8b3fdEF5A4F', '111.4675614'],
	user72: ['0x19Da21f58EC2043D35Db87dCDd3985F6fb15983F', '0.004676211633'],
	user73: ['0x3FbeC4E71BfCa562a1631b3870ad8d79623Ca2c3', '313.7777463'],
	user74: ['0xFA45D06f58A59F2775796ea6098E780ae87640f1', '58.44030964'],
	user75: ['0xA99C4F924a167cdEc1486aa9920de70A48455Ab2', '183.2256243'],
	user76: ['0xf527726378d7e10E1E322d1E22a06A8263d64544', '10.4021698'],
	user77: ['0x7aE02E3871f38D0bA4a5192d97621ba52083fD06', '34.81255964'],
	user78: ['0x3213977900A71e183818472e795c76aF8cbC3a3E', '72.33171566'],
	user79: ['0x7222659adc246fd757B411d34E786F27E644708c', '95.09970345'],
	user80: ['0x9b616Ac1D31F17Be9B23560d93699cA7732e2808', '56.99206033'],
	user81: ['0x8edF4866E26bb82d288845bF55f15370bb4e6027', '98.08573927'],
	user82: ['0xAcA9b8AF5DDb180D6FF6E4BcE7533dd76820148C', '35.16413088'],
	user83: ['0xAA2c7930E2d3C247f20D6c31ED5FD634101C6097', '89.29385599'],
	user84: ['0x9a80A6F84c45BE2C023670141FdD0b9C715011b6', '191.3461512'],
	user85: ['0xE5B314Fa02F366B136685Ef322a91586EF2364De', '0'],
	user86: ['0x6cca2005D7b45E8bd08f7a916f7B87Dc7bcF7BBb', '3.505246802'],
	user87: ['0x8dAb725afbE4340447Efff85D988b318F3966B7c', '89.27732972'],
	user88: ['0x0F2818503bfc93e30e3C77EDEe069d2695BB73ac', '1366.606042'],
	user89: ['0x50017fC607DA965b6dd12f61C8a6560dFe2Df927', '56.61031189'],
	user90: ['0x3B02692AB73431e2E263421B1B6ECf89cDB6714c', '36.42359865'],
	user91: ['0x1094694b42E85a396835EEEcEB26Ab41dD7B0D2a', '272.0281443'],
	user92: ['0xA7C58CD03F40Bb566Ec1deE09FF0cE5F0823619a', '0'],
	user93: ['0x53C42e3E9BA62b260cd0Fb51C68b473A5D547d8c', '1.806670672'],
	user94: ['0x821F80d3C57bFb5245497cA38f7c938FfBf69DA3', '45.10653916'],
	user95: ['0xcEAC5E8Ed068C620bF6C4bCE4f3C82503C22Ebc2', '63.32958098'],
	user96: ['0xB4d312929B5B949632294015EbCD1c62Eaef30CF', '9.558359167'],
	user97: ['0x0a98F2e8eA46AefdA37384D34999Dd277BF479eC', '108.032483'],
	user98: ['0x5Ea073C5F546E0012F8840224266718404E48eE5', '112.5457522'],
	user99: ['0xc3Fd2bcB524af31963b3E3bB670F28bA14718244', '53.89021414'],
	user100: ['0xF627E5F4BAd95a956468d8BB6Ee20b119F992E96', '53.80859954'],
	user101: ['0xA7CbE59f4f6A39AcE67defE064a1cCF4d3588D4c', '53.69011089'],
	user102: ['0xa54eEc957386246Ee0Da4FdB3D92c0c31528946E', '22.61652553'],
	user103: ['0x22c1B8Ca9Aed05fed1C97F24698Df5930c5667a3', '0'],
	user104: ['0x6969ecD635A4C155dc8cd1347a5365603cF77b4c', '53.4721442'],
	user105: ['0x16f5c51cee23EdfEd3dCFFF92eB3d65ef0Dc9C95', '50.62774453'],
	user106: ['0x86d3ee9ff0983Bc33b93cc8983371a500f873446', '106.1881243'],
	user107: ['0x2E0D63fFCB08eA20fF3AcDbB72dfEc97343885d2', '108.9412525'],
	user108: ['0x71195aC7A1dAA8e66d7B38C16860F69B7a20e797', '11.58317775'],
	user109: ['0x3E5728FC222146912B7D18FC71217d6c54d8C234', '0'],
	user110: ['0x74f0ef88878bAd5c38EE76144ebB723C94E25A86', '108.9104785'],
	user111: ['0x2A0626380Bf336cd9493BfeD74966d53B6b9101E', '62.26939867'],
	user112: ['0xA2BF1B0a7E079767B4701b5a1D9D5700eB42D1d1', '156.3111202'],
	user113: ['0x75D228291f2670546549563569d25AB1840fa897', '89.15517919'],
	user114: ['0x683a42E5B414Ae5cF79ece7e369cA5937fdcDC11', '74.29648456'],
	user115: ['0x796fC6401705Ce6358196fCDF20C7d9F6a0eD8f8', '89.28640374'],
	user116: ['0x9fBA986Ca84Cf5a86d22443BE56a6593fCe05BF0', '19.8679778'],
	user117: ['0x092f56D0279Eefbf1D1A3117283F2e0643176939', '98.07354475'],
	user118: ['0x9e4BA24bE9Bf30665624547033Aff2de0fb1aAD4', '0'],
	user119: ['0x1200Eb4fA3dF9903fC6EfF1d7A4a5D17502329b2', '50.41782458'],
	user120: ['0x8a97428bb43730ebF9E46AD486b8AAC18E6D7caC', '60.99980638'],
	user121: ['0x0C90A9d2b0f573c21c499DDaC720e2c6E2899f7C', '358.6039956'],
	user122: ['0xf4eCCc4FD78A22d78044b83531228af04703EE72', '367.624401'],
	user123: ['0xa2165c20395F602B1bd91a6f311858386531ea93', '41.55133319'],
	user124: ['0x70292543a3254C74399b3F6d86aC6FeC37F4E82A', '7.396137307'],
	user125: ['0xd507D4Af71088BAfbf2eA0CdB6962694F850DE01', '23.27141244'],
	user126: ['0x9b8e5ed2784566D187F2f0313556a71e480623FE', '71.05898825'],
	user127: ['0x3ba178cA5CeBD19f34f6395869D292384f2E83d9', '32.89428647'],
	user128: ['0x50DE2F8A9b943129A3DC39dFD576EF6b5B6933C1', '4.107907203'],
	user129: ['0x22108e9E55444aE89812cC92fB81402bc1F188E2', '52.96212101'],
	user130: ['0x03aE6E3226C9Fe470B638EAa1301965C613b8B6B', '20.8747554'],
	user131: ['0xBCD96bBd68958aFaFe2bd12Ec9308c4A9C7e7aac', '7.161257173'],
	user132: ['0xAb30f11201d6D53215729D45DC05a0966C237922', '1.25405288'],
	user133: ['0xdcBFcAc67d54Cba4358CF80CC75c186E734feeea', '140.0576856'],
	user134: ['0x7e86b2E9B9e6c0EE02b0200648d9FcF20557e3C5', '0'],
	user135: ['0x89C25Fd642B855DBeC3B3C2A6c2675c6f08A8f68', '48.72128991'],
	user136: ['0xa29FDDEc9C36BDD680D3f5867735ff8949a7F15D', '48.69293785'],
	user137: ['0xD563b3E47046FB8dd5D14f1a7f1f11b3C018095F', '15.98584652'],
	user138: ['0xE17F8ae7E61133CB273a718914e30E061db13190', '92.97784367'],
	user139: ['0x2fdD1FbB9793f4ac4e51CEb7a75660371796C19A', '4.054289584'],
	user140: ['0x34f89BB954D773408EF76476b8178711a5EbfDc8', '40.51189432'],
	user141: ['0xE5AfD32156859Af1a46690Ce0440e110648F374D', '202.283599'],
	user142: ['0x18f768455E7f5fB09fC491fd86bcc282BcDD5973', '131.8359714'],
	user143: ['0x3E49a45a6F0b47177FC518d91A8Da207e91b1e2d', '23.5237717'],
	user144: ['0xcC18332DbFbd0fF15b20543ae08E55Ff0fBe08b7', '13.79210198'],
	user145: ['0xDc52FF28fDA77c9CeA31c8206685fcd6553B8B35', '130.6305477'],
	user146: ['0x922e1ce088bB4Fc0295d992070B65088307957e2', '130.1394835'],
	user147: ['0x9f14bD5754F740Eb65c518290CE09197842cF532', '98.30253541'],
	user148: ['0xdfaD0c01a28d9d95486bb3f0821E4F5644704FA7', '12.04450301'],
	user149: ['0x11D0b9058104247Be40744b1e5A708FC0Ae8f7CC', '48.09639745'],
	user150: ['0x7bE9b9e46c6831a3b71891CffccF9176F953E819', '160.180384'],
	user151: ['0x3cAe9491bcF301ED23B0602A99fe459DfAB44D1D', '284.0040752'],
	user152: ['0x6C0aff3a716292F37c79bc726964941f1D8eE819', '21.3271376'],
	user153: ['0x9bE06a9F5299752c5c56E280B2C1985267FE098A', '47.53607558'],
	user154: ['0xe5A8654631B3729F73ca3503bA09a5d3e11b46da', '20.88283491'],
	user155: ['0xB8aaB9C4320ce16B9ac8070276a8e3dcD1c0DC85', '16.00716028'],
	user156: ['0xF674F927eee901A83C18d8dAcE452AE7dE3b408B', '46.87611179'],
	user157: ['0xb104371D5a2680fB0d47eA9A3aA2348392454186', '651.9264897'],
	user158: ['0x5c7a433E4BF6300B6cA314Ac58dd0ad656EbCe5B', '28.30531587'],
	user159: ['0x2c53Edc2EA32b0Eea109815173e5453bE8f363F7', '14.13861219'],
	user160: ['0xE70C89EcE8819C2a91FF23b3b3ef958ee44f9756', '116.1598944'],
	user161: ['0x59e7cCE8BFa333AB4f1Ed7F054a3510BEf6041E7', '2385.360528'],
	user162: ['0xbCD5a1776D5e28222f0Ed0B8203e5648A0668842', '84.11282778'],
	user163: ['0x240E9B275A46d60d3BF8EeC243cA023fD6736549', '45.8116805'],
	user164: ['0x83C9440dc34DA00c47A0d4dC2b598d7BDB1b53F7', '45.79594757'],
	user165: ['0x92d3FBBDEaa9A1C40e0d40A31679AEAA3e559b1b', '9.839962563'],
	user166: ['0xDFc867D43BF3427206F5bF97Ef14cE54DaAbEe51', '13.1184937'],
	user167: ['0xa044468730b5D51c7Ce785eE04AE6bc963F8A7C7', '44.93522499'],
	user168: ['0x9f57cb74EB09cf79e4483de5eC96FF03B2AC8191', '3.702674907'],
	user169: ['0x7Da9949382C0f36700b563712Ff0a6E38374Aa92', '51.03599776'],
	user170: ['0x85D31C01AFAc54830ccdE094FC4A2DD429167890', '45.8478444'],
	user171: ['0xBA12Fda058A14eb03C14613601C3a30d6F955196', '14.22314694'],
	user172: ['0xb03B6Bee3c131Bc96E0ff2D1AC618C6460b0d252', '4.910273979'],
	user173: ['0xb14d56ce29dADE0316EA5Df06D491636a7c4F3C8', '254.4141698'],
	user174: ['0x8257e8D24F1960dE1Ce366f7704C930CcaC09716', '31.77241359'],
	user175: ['0x677D3Ced14DBFc6d657D155B9dBA4F9e2A2e8b19', '31.83279446'],
	user176: ['0x46c02728889A5b97bbc25bde35f40C3406d306Fb', '84.59762284'],
	user177: ['0x11219d61e95fC5930762b16868dDB2C9c6fc83fA', '42.07953366'],
	user178: ['0x23443c67362b06Efd93ec22368d9EC889433eB9d', '31.85575443'],
	user179: ['0x8107EAD1E910EB6097710fAafB76D6537CbfCf17', '100.1381853'],
	user180: ['0x866C521883Bc8cb7c59769E2A06ef38cC685915E', '34.78428979'],
	user181: ['0x702E9e66A100881039bE7BBadaCF1BA607C97f6B', '35.04181552'],
	user182: ['0x8deB5646Abb78064eD0029babDf4C33613E24bdA', '34.44228696'],
	user183: ['0xcb2d0A3A67365E0f448637AA5C9e368081D52172', '31.54688321'],
	user184: ['0xEF989Ef6873e06C3Fd71c9e7c913A7512B824eC4', '137.1075998'],
	user185: ['0xF7d3CaEc8E9Db67719756F4d05519A491572A2aC', '0.3040991689'],
	user186: ['0xE5BcB087e8083Ce080cad255644511E5B94c90d1', '47.01240898'],
	user187: ['0x8C61BA93A1912A0cbC3AD15B915f750B07E94e1f', '11.64896695'],
	user188: ['0x24d734a75166e66000C8d7f12A173e41358e3cc1', '35.69914623'],
	user189: ['0x18c9BA467387590B2E0cD89F9D2e1d0384Fe4d69', '67.53750566'],
	user190: ['0xD905DE91f928b20EA0cCf455e5bA07eB6373955C', '0'],
	user191: ['0x5F855b107afaadf722cF9611b82167A272B4aCb0', '30.65208395'],
	user192: ['0xBCA82e1952d4f73464a6269BaC1618f9d75EB1B5', '40.83980171'],
	user193: ['0x3e08C32d5617BECC066864A6BD5Dcdd9dC4A0482', '0'],
	user194: ['0x66C97dC031bB2f6aD421CeF7b01De0CA2AE4fe64', '7.999042716'],
	user195: ['0x62181D8d16790861cFCFdB333ccC7E57FEA2d547', '243.7025166'],
	user196: ['0xC52A783B151ded3f097C5F83a9bCC929bf7a17e9', '855.3681123'],
	user197: ['0x8E48eb1E292AC19750D711011226cA9B321c8FBA', '17.69897125'],
	user198: ['0xb897Cc26C2C5F9F6857FE05D6cD90d325011a09C', '24.89380785'],
	user199: ['0x73988F4BFC8aB788004d7d8cf5526e1f9d962893', '8.752522678'],
	user200: ['0x9e382785C5ecfBf12581181873424cc979B77F0D', '115.920924'],
	user201: ['0x0a09E5306810a92Aeb7f7f257B2302C2B8439e20', '8.888410703'],
	user202: ['0x672Bde8fBB840B0738396DfaE4dde3F8983A568E', '37.32245174'],
	user203: ['0xcC3dB4ba7cA0bBFB72Ed13262aaa564812076e5A', '41.57949022'],
	user204: ['0x40e14b90e66b1D694F425579118D0Dc8EF1Dbc91', '36.97993267'],
	user205: ['0x06Dc0CBF44EED256C5975210095be703504a4541', '122.4757551'],
	user206: ['0x4fB685826A37c4d607059c53caC1B9142F295F01', '127.1124462'],
	user207: ['0x63a50858471beb51621222Bc119A3D8E142220E9', '0'],
	user208: ['0x187089B33E5812310Ed32A57F53B3fAD0383a19D', '36.44009638'],
	user209: ['0x8c11C53F77aD5e91fB13611904f2F59b07Aa7c93', '19.41015721'],
	user210: ['0xbE857415330B15070337073692358f72FaFD087b', '13.51475849'],
	user211: ['0xb19343CAfAdD9f798Da8467B5F9AB77378645685', '94.85660778'],
	user212: ['0xE0dED48D632CF455c2893A9891D983ffFFf22ce8', '146.6841054'],
	user213: ['0x724F321C4efeD5e3C7CcA40168610c258c82d02F', '39.77365509'],
	user214: ['0xf5Fe364D18F4a5A53BADCe9a046ba74cfC97f6Fb', '20.60454363'],
	user215: ['0x76918841298C0EecF0Fe9409CDAD3000320666ED', '7.964836423'],
	user216: ['0x5e5C817E9264B46cBBB980198684Ad9d14f3e0B4', '11.14848595'],
	user217: ['0x9dA4289aC7bBdE33E965F8533b1A4d01b4911d6a', '4.84996522'],
	user218: ['0x0a50f6f860075D3a20327B8210D95131872eebe8', '1172.173012'],
	user219: ['0x4a7fD8f063A6EbA78F731f562a5a1E9fBB3313Bb', '69.22490786'],
	user220: ['0x4b9D53246eD18db31f26Fc59b6e47a9efC3C1213', '47.39840585'],
	user221: ['0x3839AcF1ee7699D1F46b1BE840D8aD8317FDf757', '34.56574678'],
	user222: ['0x5B50a6Df9d3b0F468431DA912c4f0203817dB71b', '120.0496456'],
	user223: ['0x71E73013573aCb51062CA174fAD2D60Fce92Fa6c', '80.95853111'],
	user224: ['0xD58A00C3F7Dce14caEaf49FC465cE1896928aB04', '18.87750591'],
	user225: ['0x1bd6c4ce2217Af523b94a12D3579a74935F0ba51', '12.88801687'],
	user226: ['0xAdc3C1aC7b171B5A2F7E58c52203c1aF37E76ab4', '4.626788504'],
	user227: ['0xe8417f6eFc0A658c9b210DFd5779Ecb0401f2780', '2.794698902'],
	user228: ['0x909Fd983ab19BDB39d36B7d245D4E94a6E41b70A', '4.716908168'],
	user229: ['0x3f31a2f67C08883a592401E9aB62BFdeb9D3d0D2', '3.485351743'],
	user230: ['0x78AdB1b4707B4B75A407DD913238735382451481', '0.7007290201'],
	user231: ['0x1328e01820b3f16819A1a78BdCEEF0F54439732E', '3.171384391'],
	user232: ['0xABceB0F84C830d6d7B94C6273F2ab27cA597Aa25', '32.19974301'],
	user233: ['0x8b07BC7b5276F7e0eE1F7C786ad654aF01671A8e', '195.5118219'],
	user234: ['0x4Fc6919D8B4C64E0Cee4E28Cdb29df3da72280a9', '2.665011456'],
	user235: ['0x3eB83132a11367be237292928ACE7FD8dbfD00eA', '192.4972259'],
	user236: ['0xD0F0b33573950C4fd9faD0Fc04B321996F958Dd6', '44.19269512'],
	user237: ['0x561c9370c92BeB467c4C6c680545A9Bee8F245B0', '18.36444252'],
	user238: ['0x3977263f2c5B49c47B911bceDD36F4e95Bf6668F', '31.08434357'],
	user239: ['0xe1F21Ad5246a5b484c4925B26fA9Cc77e4B99CdA', '53.93960216'],
	user240: ['0xc7ada523591f052D64f2471BE6c51c13D90DB673', '106.7249478'],
	user241: ['0xB16A53610fa8b08455e88D73f1189aae2b8B0de8', '13.32514332'],
	user242: ['0xEaC03Ab059b522886A6F273BD96b26bD86a0b4a2', '83.4995187'],
	user243: ['0x741B1b6CD5b48965B3547B7596a6B44dA3DaD668', '6.184930858'],
	user244: ['0xD4cAD2E8D9d6734FB247Ab373695fF928087d0F3', '30.29343588'],
	user245: ['0x158836c5696f5C7e143232508258F3EEDFc10F14', '8.503708246'],
	user246: ['0x3E86eAC93A2dbB4faEB8709d77d451aeDA710eF9', '12.62167797'],
	user247: ['0xdbEC81b4Eab0B5234dBd9ff7c456BF750d7a9086', '12.50092197'],
	user248: ['0xB2646e86Ca2546D0926eC2E512eC444000313a05', '59.99819784'],
	user249: ['0x270F6F2bd050d0349F0Ad81FB123bb0799A7D6F6', '4.111828829'],
	user250: ['0x57E235800D293DEe6eE5F3da50EAE5846357eA23', '5.556072118'],
	user251: ['0x273298C3215fA15dC5211d4E88c93a8a21143f97', '119.7872624'],
	user252: ['0x094e4b82a5722271546CCa99c8C351BD840669AE', '29.64232187'],
	user253: ['0x239909273E9283603957fC62C4FEa578Bbd6337E', '12.50098971'],
	user254: ['0xf60391d3524014e90bA9c77C22E69982b5B7C195', '81.2578193'],
	user255: ['0x85A6d00547f0bC5c7E9626462803F5F181f67B33', '8.494630124'],
	user256: ['0xccC4e8Ad313dF8150211B1b934725345924ab81D', '2.020872377'],
	user257: ['0xC0385C781b2F35Ae0Ba54C2948f4C23aFa3bB954', '274.10567'],
	user258: ['0x0297ACBE62Ac90C4d79654eEce1aEEEa3B2Bcf9a', '50.02360425'],
	user259: ['0xf19f07C100409DE633b32452Ff40faD5BF7Fb7b8', '15.89200203'],
	user260: ['0xadaEB2a30601E91CAEc19755D8cB11C280c750E3', '168.822244'],
	user261: ['0xF662bD348766349AdE94BBbfd523CeCcC6049145', '3.56371377'],
	user262: ['0xe30C3AB7DA98E771E9fC87022f2390E760160b42', '7.464733034'],
	user263: ['0xEd682972bc0d52C9f9e20409a5fa6108052Fd5cD', '3.715259342'],
	user264: ['0xcc062209E4d148E41062b62C9Ea4f1aF390960F4', '11.49139206'],
	user265: ['0x0c1Af28aBBB46cabc03B33B9B7E6ECa295A5d79D', '1596.319164'],
	user266: ['0x5Ac0Cb2Fe1e5FC6850D436ea70fB1ad975e7Abb7', '22.80196465'],
	user267: ['0x2D0e9e8197c541704EAd0AEB35Ef5F03dC35bC6D', '16.46180901'],
	user268: ['0x9ed9d62EA3A7D4727930DC7991DA8fcCBb0F864A', '19.96263939'],
	user269: ['0x0Fdc5253a880043a7AcFd481B4Ce288f0a4c3427', '52.4185293'],
	user270: ['0xca4aD39F872E89Ef23eABd5716363Fc22513E147', '26.1679657'],
	user271: ['0x133D93566f9699B3Af46fE150daA8a67a9563ED6', '32.66001776'],
	user272: ['0x302c2Ae10e882710e8DD528BA4537D3a2f54ba07', '21.68973365'],
	user273: ['0xd2a08007eeeaf1f81eeF54Ba6A8c4Effa1e545C6', '25.41130993'],
	user274: ['0xD7c01CB09870c3E810a56F0f75BD7a0D995A8d8c', '17.02058818'],
	user275: ['0xa706ed4676204E1B9b3Aa005cF8AB5C92d30a830', '14.10405177'],
	user276: ['0x3A7Fd47aC8Aaf2a90AaCFF8de7eD651284B71EbE', '27.49691896'],
	user277: ['0x1DB36276e6cd6bbECF79b275b4Ef7D0abB369b14', '38.01078589'],
	user278: ['0x67ec099bd6430038fD1E4b30A990220431dDF4D3', '7.669053994'],
	user279: ['0x7595964C89ED5eC8E47a43b2b57F07c6d83133FD', '12.08780955'],
	user280: ['0xC3F7645899d3422dc6E8Bc12289e9281049b32c1', '178.3527821'],
	user281: ['0x842485AC1CF5d37d3cfd013745618561B2dA4B46', '9.382468794'],
	user282: ['0x1b123BA1388281a2974C1607aDc6eAc54B37E914', '128.2459451'],
	user283: ['0xFf3c431953575be7c8bb37fb6adD2a72C9c14878', '53.9399511'],
	user284: ['0xeA27f945e3C69c425E75d57C4836Ea62629aCaE7', '126.135699'],
	user285: ['0x5B93FF82faaF241c15997ea3975419DDDd8362c5', '21.93482325'],
	user286: ['0xF80398549f2b9F99e5278eF9c2Fe79263377519A', '0.5124607061'],
	user287: ['0x0a5Cba964A8E01F520d1878af779B848dAe5cc22', '6.935580122'],
	user288: ['0x30Eea1E603b556EEf164B4554bb6E7471B3e70f7', '20.38447375'],
	user289: ['0xDd8eDAA9d1A65BCe1B83C8461A07B8bD5fc1ab23', '4.555348011'],
	user290: ['0xeDD706730cA62d3eb9ca2242ad7B9d66D758dCb0', '92.46541874'],
	user291: ['0x40c7F627fFB69b8D8752C518F8790b04A523BEE5', '17.44159575'],
	user292: ['0xfda0bA0E7FC3a53284db80D6dA0d667C8D4dc95B', '3.029650872'],
	user293: ['0xfb477f53e70E9a52DAFCe0b75cB5347daD52D73D', '81.47022948'],
	user294: ['0x0154d25120Ed20A516fE43991702e7463c5A6F6e', '17.05007514'],
	user295: ['0x02d8c5A32f3d3d7468d82199D0D07dfd4341C338', '2.929129171'],
	user296: ['0x8b024e6EB9Dcc2A7B162e1750a6f157b29A1a8bc', '4.188449854'],
	user297: ['0x171F8a894AF61a72682E111Afa236D9BE6E7bd6F', '86.10829912'],
	user298: ['0x9a245138693c3DEeC7ac109840c18F1b0DD333a1', '13.00502483'],
	user299: ['0xe1682561c50734349402A4c2eC5a0611e9645b51', '98.37676017'],
	user300: ['0x8bA38A17101411845D5447116936fdfFAD176Ed0', '3.580481363'],
	user301: ['0x12b09349aCd9dB41cE556b610039321220891d0C', '59.92226622'],
	user302: ['0x0fFeb87106910EEfc69c1902F411B431fFc424FF', '312.5182339'],
	user303: ['0x4eA4c5baa24a332f0617FEd44F58d1890B7E1CCc', '0'],
	user304: ['0x9D41ecceDD6911C60c523D528a326f0DC2b59F4e', '9.833376446'],
	user305: ['0xd54EB416Da650C930b45Ae85F452Ce6A2c7FAb84', '5.690611644'],
	user306: ['0x8a68c3EB7ad240754014CE640a1F90F962f66113', '8.350947333'],
	user307: ['0xD4D7126E6651a150d740f9fc8F3456670f279fB4', '1.219189274'],
	user308: ['0xc1A69d8b8C2504006D5812b90039d14eD9A57d82', '5.882012615'],
	user309: ['0x7d1675dC635959B26F61E03637599C12C7e84FAe', '5.626982034'],
	user310: ['0x613D7a8F4fbbefB1bC60107E650589A737ee914B', '5.190229242'],
	user311: ['0x5Fb1c698d768d15B472a588188A99C2199eA3603', '0.7037319346'],
	user312: ['0x6c4de74f5752960e991D7bf580fDE2cFc5E2CA59', '4.94079669'],
	user313: ['0x9fD4B603CcD2C23Ff0fF8BDeFC6464492f0DfaEF', '3.000340908'],
	user314: ['0xC6a3727eC21519969b9d2Dc6b5182cbdBC219eaf', '3.753549369'],
	user315: ['0x998fdAdec779263DA761eD489873249d9086249B', '3.312520004'],
	user316: ['0xE12dEEEAE3cBeB2944B7dC47684c684c879a906E', '3.841802386'],
	user317: ['0x4CB01b6672bc750821af952ec5A2447fC90195b1', '0.5044949529'],
	user318: ['0x4412f9ff7681161287C7795505B8AcC6a5d7fbe1', '0.5335813504'],
	user319: ['0x59ae11191d0bcAB7Fc12D0817b5091946D8A2a78', '3.901664695'],
	user320: ['0xb68F52FE2583b5a568E7E57dc98c69d93821f6e4', '2.705409041'],
	user321: ['0x5aE6fb576F002E880512a31f3303511eb3b221f8', '3.155805236'],
	user322: ['0x92f54fCf156B1E3DB0DB363F4c446Fd10E2a86c9', '44.76007619'],
	user323: ['0x9152A3F36837bDf5BDC1179902958309dDa35181', '0.995845531'],
	user324: ['0x204FBB426193E09a3611d0DaFBc5A4E92e133a33', '0.1862672808'],
	user325: ['0x1F70AB7A96554F0cc1F6a4c57f2b244E8cBA2f92', '1.158044019'],
	user326: ['0xcc99A82C7406ecf57270D7c204d888502b4C38a0', '1.087193785'],
	user327: ['0x0B7c0949971332F083B542751dD44e8910E09982', '3.354392552'],
	user328: ['0xc127c110CeaDe7370C8B327287F2A669Ec7E93ba', '0.7492809628'],
	user329: ['0xe223089a76211cFB3b0d0247008D6ff21Eddd845', '0.1962178153'],
	user330: ['0x9E5b03439a33f5dA3DD2962a5B6d4C23f94cae64', '0.5968693972'],
	user331: ['0x46b2351BFD84F5446Ae07CA432a6E64456f3E90D', '0'],
	user332: ['0x03bfb1A8EF1B295faC603F87217EcDD33280Cd2a', '0'],
	user333: ['0x426A04b46e1052712b021213A63Fe40e5376F8Cf', '0'],
	user334: ['0x828A30F9bfFf6726765b5C7eAc213B5Ad22fbFb8', '0'],
	user335: ['0x334Bc680d521d64F48bD09b10bD24E598dC0DA0d', '0'],
	user336: ['0x1824BEFc17aedBC57991C9D7c7Fee1bf18CCCe63', '0'],
	user337: ['0x44d835FE956EB26C0BE2816844583c232f19ae88', '0'],
	user338: ['0x3725354B144835d529208060B3228FF07B6fAA59', '0'],
	user339: ['0x2bEBa030cdC9c4a47c5aa657974840428b9fEfAc', '0'],
	user340: ['0x9Ca146129575414db04E64804b474F53973d7673', '0'],
}

module.exports = {
  pushUsersMapping
}