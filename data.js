// data.js
const companyOptions = {
    UK: ["Revolut", "Curve", "Zen","Pockit","Banxa","Rampnetwork","Bitget",],
    Ireland: ["Revolut", "Zen", "Pockit","Crypto_com", "MEXC","Banxa","Rampnetwork",],
    Italy: ["Revolut", "Bintence_Wire", "Zen","MEXC","Banxa","Rampnetwork",],
    Denmark: ["Revolut", "Zen","MEXC","Adv2", "Advcash", "W1tty", "Bit2me","BestWallet", "Banxa","Rampnetwork",],
    Malasiya: ["Bybit","Luno","Paybis","Banxa","Rampnetwork", "Luno",],
    Canada: ["NDAX","Adv2","Advcash","Bit2me","BitBuy","MyBTC","ndax","BullBitcoin","Bestwallet","Wise","Wealthsimple","Newton","Banxa","Rampnetwork", "Netcoin",],
    New_Zeland: ["Revolut","Zen","Adv2","Advcash","Bit2me","Bestwallet","Wise","Bybit","Paybis","Banxa","Rampnetwork"],
    Bermuda: ["Bestwallet", "Gemini","Wise",],
    Switzerland: ["Zen", "Bintence","MEXC", "Cryptocom", "AdvCash", "AdV2", "Bit2me", "Bestwallet","Skrill","Banxa","Rampnetwork","Wise",],
    Norway: ["Revolut","Binance","Banxa","Rampnetwork","Wise",],
    Bahamas: ["Neteller","Skrill","Wise",],
    Singapore: ["Revolut","Neteller","Skrill","Rampnetwork","Wise",],
    Hong_Kong: ["Neteller","Skrill","Rampnetwork","Wise",],
    Japan: ["Wise","Banxa",],
    UAE: ["Wise","Banxa","Rampnetwork"],
    Oman: ["Wise",],
    Saudi_Arabia:["Banxa","Wise",],
    Iceland:["Banxa","Rampnetwork","Wise",],
    Greenland:["Banxa","Rampnetwork","Wise",],
    Sweeden:["Banxa","Rampnetwork","Wise",],
    South_Africa:["Banxa","Rampnetwork", "Luno","Wise",],
    // Добавьте другие страны и компании по аналогии
};

const companyInfo = {
    UK: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Curve: {
                greenBoxInfo: "Curve you can download and install, credit the account and use virtual card on moonpay, similar process to Revolut.",
                yellowBoxInfo: "You can use credit card to top up which is useful. Not sure of age limit.",
                redBoxInfo: "CURVE it is like Revolut you can use a virtual card. You can top up with high street banks, you can use credit cards, and work with MOONPAY.",
            },
            Zen: {
                greenBoxInfo: "Zen, you transfer max 5k here, you need to convert to ETH and leave for one day before you transfer the funds.",
                yellowBoxInfo: "First transaction UK via wire must be 1.000$ only. Then you can do total 5.000$ next day",
                redBoxInfo: "ZEN up to 2k: BANK TRANSFER: INSTANT VERIFICATIONs",
            },
            Pockit: {
                greenBoxInfo: "Pockit up to 2k and then moonpay:",
                yellowBoxInfo: "Open with them before you pitch Pockit. Up to the age of 69",
                redBoxInfo: "Commission for the agent: 8%"
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Bitget: {
                greenBoxInfo: "LIMIT 8K PER DAY PLUS ACCEPTS COLD WALLETS ",
                yellowBoxInfo: "WORKS WELL WITH REVOLU",
                redBoxInfo: ""
            },

        },
        "Big deposit": {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Bitget: {
                greenBoxInfo: "LIMIT 8K PER DAY PLUS ACCEPTS COLD WALLETS ",
                yellowBoxInfo: "WORKS WELL WITH REVOLU",
                redBoxInfo: ""
            },
        },
    },

Ireland: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Zen: {
                greenBoxInfo: "Zen, you transfer max 5k here, you need to convert to ETH and leave for one day before you transfer the funds.",
                yellowBoxInfo: "First transaction UK via wire must be 1.000$ only. Then you can do total 5.000$ next day",
                redBoxInfo: "ZEN up to 2k: BANK TRANSFER: INSTANT VERIFICATIONs",
            },
            Pockit: {
                greenBoxInfo: "Pockit up to 2k and then moonpay:",
                yellowBoxInfo: "Open with them before you pitch Pockit. Up to the age of 69",
                redBoxInfo: "Commission for the agent: 8%"
            },
            Crypto_com: {
                greenBoxInfo: "Wire transfer 1st time $1000, then you can move more.",
                yellowBoxInfo: "No specific limits",
                redBoxInfo: ""
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            
        },
        "Big deposit": {
            Crypto_com: {
                greenBoxInfo: "Wire transfer 1st time $1000, then you can move more.",
                yellowBoxInfo: "No specific limits",
                redBoxInfo: ""
            },
            MEXC: {
                greenBoxInfo: "DAILY transaction limit to be changed to 8,000EUR for BIG TRANSACTIONS",
                yellowBoxInfo: "Done 10.000$ trx with MEXC. We did in usdt ut later we find how to do also eth. you receive money, then change in crypto clicking on transfer then withdrawl and you have 2 options like revolut and the first one exchange crypto.",
                redBoxInfo: "The first time you have to add 2FA and you can choose google auth or email much better.then you you can send and put OTP received on email and by sms. for USDT TRC20 you have 0.93 cent in transfers on 10k on ERC20 you have 3,74 eur. fee. 10/15 minutes before receive (its written on the app). / NOT TESTED YET"
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
        },
    },

    Italy: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
           Zen: {
                greenBoxInfo: "Zen, you transfer max 5k here, you need to convert to ETH and leave for one day before you transfer the funds.",
                yellowBoxInfo: "First transaction UK via wire must be 1.000$ only. Then you can do total 5.000$ next day",
                redBoxInfo: "ZEN up to 2k: BANK TRANSFER: INSTANT VERIFICATIONs",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
        },
        "Big deposit": {
            Revolut: {
                greenBoxInfo: "Revolut, you can not move more than 2k a day and 10k a month through crypto",
                yellowBoxInfo: "You will need to convert the fiat to ETH and then transfer daily",
                redBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step."
            },
            Bintence_Wire: {
                greenBoxInfo: "2K up to 50k you can do wires to Bintense: The agent's commission and your commission will be lower here. So I would suggest using this solution for the STD up to 20k and then look at an exchange.",
                yellowBoxInfo: "No amount will be held for risk",
                redBoxInfo: "Agents commission 7% and for managers counts as wires",
            },
            Zen: {
                greenBoxInfo: "Zen, you transfer max 5k here, you need to convert to ETH and leave for one day before you transfer the funds",
                yellowBoxInfo: "",
                redBoxInfo: ""
            },
            MEXC: {
                greenBoxInfo: "DAILY transaction limit to be changed to 8,000EUR for BIG TRANSACTIONS",
                yellowBoxInfo: "Done 10.000$ trx with MEXC. We did in usdt ut later we find how to do also eth. you receive money, then change in crypto clicking on transfer then withdrawl and you have 2 options like revolut and the first one exchange crypto.",
                redBoxInfo: "The first time you have to add 2FA and you can choose google auth or email much better.then you you can send and put OTP received on email and by sms. for USDT TRC20 you have 0.93 cent in transfers on 10k on ERC20 you have 3,74 eur. fee. 10/15 minutes before receive (its written on the app)"
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
        },
    },


    Denmark: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Zen: {
                greenBoxInfo: "Zen, you transfer max 5k here, you need to convert to ETH and leave for one day before you transfer the funds.",
                yellowBoxInfo: "First transaction UK via wire must be 1.000$ only. Then you can do total 5.000$ next day",
                redBoxInfo: "ZEN up to 2k: BANK TRANSFER: INSTANT VERIFICATIONs",
            },
            Adv2: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Advcash: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bit2me: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            BestWallet: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
        },
        "Big deposit": {
            MEXC: {
                greenBoxInfo: "DAILY transaction limit to be changed to 8,000EUR for BIG TRANSACTIONS",
                yellowBoxInfo: "Done 10.000$ trx with MEXC. We did in usdt ut later we find how to do also eth. you receive money, then change in crypto clicking on transfer then withdrawl and you have 2 options like revolut and the first one exchange crypto.",
                redBoxInfo: "The first time you have to add 2FA and you can choose google auth or email much better.then you you can send and put OTP received on email and by sms. for USDT TRC20 you have 0.93 cent in transfers on 10k on ERC20 you have 3,74 eur. fee. 10/15 minutes before receive (its written on the app) / NOT TESTED YET"
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
        },
    },

     Malasiya: {
        STD: {
           Bybit: {
                greenBoxInfo: "Daily limit 10.000$",
                yellowBoxInfo: "Work with credit cards",
                redBoxInfo: "KYC: YES - ID/DL - SELFIE",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Luno: {
                greenBoxInfo: "Transaction amount: LEVEL 1 - EUR1.000 / LEVEL 2 - EUR5.000 per month / LEVEL 3 - No Limit. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: ZA only instant bank transfer. Malaysia works the same way as Help2Pay. WD LIMIT IS BASED ON ACC LEVEL. LEVEL 1 - EUR1.000 Lifetime. LEVEL 2 - EUR5.000 per month. LEVEL 3 - No limit",
                redBoxInfo: "For account verification there are three levels: LEVEL 1 - Cofirm your mobile number + basic perosnal details / LEVEL 2 - Submit a photo of ID and a selfie / LEVEL 3 - Enter residential addres + emplyment status + SOF",
            },
        },
        "Big deposit": {
           Luno: {
                greenBoxInfo: "Transaction amount: LEVEL 1 - EUR1.000 / LEVEL 2 - EUR5.000 per month / LEVEL 3 - No Limit. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: ZA only instant bank transfer. Malaysia works the same way as Help2Pay. WD LIMIT IS BASED ON ACC LEVEL. LEVEL 1 - EUR1.000 Lifetime. LEVEL 2 - EUR5.000 per month. LEVEL 3 - No limit",
                redBoxInfo: "For account verification there are three levels: LEVEL 1 - Cofirm your mobile number + basic perosnal details / LEVEL 2 - Submit a photo of ID and a selfie / LEVEL 3 - Enter residential addres + emplyment status + SOF",
            },
            Paybis: {
                greenBoxInfo: "DV2 AND ADV2CASH AND BIT2ME AND BESTWALLET:  NOT TESTED YET IF YOU USE MAKE CRM AWARE OF SUCCESS",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
        },
    },

    Canada: {
        STD: {
            Adv2: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Advcash: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bit2me: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bestwallet: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Wealthsimple: {
                greenBoxInfo: "Transaction amount: no minimum - Up to limit for transaction type. Permitted age: 19 and up to no age limit.",
                yellowBoxInfo: "Deposit options: Linked Visa/Master Debit card $3.500 per day $35.000 per month. No limit for wire transfer deposit. Interac transaction limit CAD3.000 per transaction; Maximum CAD10,000 per week; CAD20,000 per month. Crypto WD limit of CAD10,000 a day/CAD25,000 a week. No limits on buying BTC and ETH",
                redBoxInfo: "For account verification you need ID, POA and Selfie. / UNTESTED",
            },
            Newton: {
                greenBoxInfo: "Transaction amount: CAD10-CAD50.000. Permitted age: 19 and up to no age limit. NOT DO more than 3.000CAD for the first transaction. Open exodus and send the money there. / 72 HOURS TO VERIFY ",
                yellowBoxInfo: "Deposit options: Interac e-transfer minimum CAD10 maximum CAD10,000 per transaction; Weekly limit CAD50,000. Wire transfer Minimum CAD10,000 maximum CAD1,000,000. Crypto withdrawal limits: 5 transactions per day. ",
                redBoxInfo: "For accout verification you need ID, POA (sometimes) and Selfie. They might ask for the client to complete an investor questionare at a certain point in oreder to grant full services. / UNTESTED ",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Netcoin: {
                    greenBoxInfo: "Transaction amount: CAD10 - CAD1,000,000. Permitted age: 18 and up to not specified.",
                    yellowBoxInfo: "Deposit options: Interac e-transfer minimum CAD10 - CAD3000. Bank transfer minimum USD500-USD1,000,000. Crypto withdrawal requers 2FA no crypto withdrawal will be alowed otherwise. Limits are not specified anywhere",
                    redBoxInfo: "For account verification you need ID, POA and Selfie. / NOT TESTED ADDITIONAL INFO NEEDED",
                },
            
        },
        "Big deposit": {
                NDAX: {
                    greenBoxInfo: "72 HOURS TO VERIFY ",
                    yellowBoxInfo: "",
                    redBoxInfo: "3.000 CAD limit per transaction per day. ",
                },
            Wealthsimple: {
                greenBoxInfo: "Transaction amount: no minimum - Up to limit for transaction type. Permitted age: 19 and up to no age limit.",
                yellowBoxInfo: "Deposit options: Linked Visa/Master Debit card $3.500 per day $35.000 per month. No limit for wire transfer deposit. Interac transaction limit CAD3.000 per transaction; Maximum CAD10,000 per week; CAD20,000 per month. Crypto WD limit of CAD10,000 a day/CAD25,000 a week. No limits on buying BTC and ETH",
                redBoxInfo: "For account verification you need ID, POA and Selfie. / UNTESTED",
            },
             Newton: {
                greenBoxInfo: "Transaction amount: CAD10-CAD50.000. Permitted age: 19 and up to no age limit. NOT DO more than 3.000CAD for the first transaction. Open exodus and send the money there. / 72 HOURS TO VERIFY ",
                yellowBoxInfo: "Deposit options: Interac e-transfer minimum CAD10 maximum CAD10,000 per transaction; Weekly limit CAD50,000. Wire transfer Minimum CAD10,000 maximum CAD1,000,000. Crypto withdrawal limits: 5 transactions per day. ",
                redBoxInfo: "For accout verification you need ID, POA (sometimes) and Selfie. They might ask for the client to complete an investor questionare at a certain point in oreder to grant full services. / UNTESTED ",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Netcoin: {
                    greenBoxInfo: "Transaction amount: CAD10 - CAD1,000,000. Permitted age: 18 and up to not specified.",
                    yellowBoxInfo: "Deposit options: Interac e-transfer minimum CAD10 - CAD3000. Bank transfer minimum USD500-USD1,000,000. Crypto withdrawal requers 2FA no crypto withdrawal will be alowed otherwise. Limits are not specified anywhere",
                    redBoxInfo: "For account verification you need ID, POA and Selfie. / NOT TESTED ADDITIONAL INFO NEEDED",
                },
        },
    },


    New_Zeland: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Adv2: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "All NZ banks have a 0 CRYPTO POLICY",
            },
            Advcash: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "All NZ banks have a 0 CRYPTO POLICY",
            },
            Bit2me: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "All NZ banks have a 0 CRYPTO POLICY",
            },
            Bestwallet: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "All NZ banks have a 0 CRYPTO POLICY",
            },
            Bybit: {
                greenBoxInfo: "DV2 AND ADV2CASH AND BIT2ME AND BESTWALLET:  NOT TESTED YET IF YOU USE MAKE CRM AWARE OF SUCCESS",
                yellowBoxInfo: "",
                redBoxInfo: "All NZ banks have a 0 CRYPTO POLICY",
            },
            Paybis: {
                greenBoxInfo: "DV2 AND ADV2CASH AND BIT2ME AND BESTWALLET:  NOT TESTED YET IF YOU USE MAKE CRM AWARE OF SUCCESS",
                yellowBoxInfo: "",
                redBoxInfo: "All NZ banks have a 0 CRYPTO POLICY",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
        },
        "Big deposit": {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
        },
    },

     Bermuda: {
        STD: {
            Bestwallet: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
        "Big deposit": {
            Gemini: {
                greenBoxInfo: "Need Information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
    },

    Switzerland: {
        STD: {
             Zen: {
                greenBoxInfo: "Zen, you transfer max 5k here, you need to convert to ETH and leave for one day before you transfer the funds.",
                yellowBoxInfo: "First transaction UK via wire must be 1.000$ only. Then you can do total 5.000$ next day",
                redBoxInfo: "ZEN up to 2k: BANK TRANSFER: INSTANT VERIFICATIONs",
            },
            Bintence: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bit2me: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
        
            Bestwallet: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
        "Big deposit": {
            MEXC: {
                greenBoxInfo: "DAILY transaction limit to be changed to 8,000EUR for BIG TRANSACTIONS",
                yellowBoxInfo: "Done 10.000$ trx with MEXC. We did in usdt ut later we find how to do also eth. you receive money, then change in crypto clicking on transfer then withdrawl and you have 2 options like revolut and the first one exchange crypto.",
                redBoxInfo: "The first time you have to add 2FA and you can choose google auth or email much better.then you you can send and put OTP received on email and by sms. for USDT TRC20 you have 0.93 cent in transfers on 10k on ERC20 you have 3,74 eur. fee. 10/15 minutes before receive (its written on the app). / NOT TESTED YET"
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
    },

    Norway: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Binance is a crypto wallet. They can use Revolut card to top up in Binance",
                redBoxInfo: "To use Revolut Card only, Bank transfer to be tested",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            
        },
        "Big deposit": {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Binance is a crypto wallet. They can use Revolut card to top up in Binance",
                redBoxInfo: "To use Revolut Card only, Bank transfer to be tested",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
    },

    Bahamas: {
        STD: {
             Neteller: {
                greenBoxInfo: "Transaction amount: Any amount. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: instant bank transfer, no limits / regular bank transfer, no limits / Card payment up to 5k a day / You can wd (once the money is in) in crypto (2k gbp limit per day) / Anyways you need to be smart and not wd everything in one day / Tested wd of crypto to exodus and binance, worked / Accepted 40+ countries / You can order physical card for 10$ or virtual card for free.",
                redBoxInfo: "You can use it to deposit up to 500 eur with no kyc at all.",
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            
        },
        "Big deposit": {
             Neteller: {
                greenBoxInfo: "Transaction amount: Any amount. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: instant bank transfer, no limits / regular bank transfer, no limits / Card payment up to 5k a day / You can wd (once the money is in) in crypto (2k gbp limit per day) / Anyways you need to be smart and not wd everything in one day / Tested wd of crypto to exodus and binance, worked / Accepted 40+ countries / You can order physical card for 10$ or virtual card for free.",
                redBoxInfo: "You can use it to deposit up to 500 eur with no kyc at all.",
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
    },

    Singapore: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
             Neteller: {
                greenBoxInfo: "Transaction amount: Any amount. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: instant bank transfer, no limits / regular bank transfer, no limits / Card payment up to 5k a day / You can wd (once the money is in) in crypto (2k gbp limit per day) / Anyways you need to be smart and not wd everything in one day / Tested wd of crypto to exodus and binance, worked / Accepted 40+ countries / You can order physical card for 10$ or virtual card for free.",
                redBoxInfo: "You can use it to deposit up to 500 eur with no kyc at all.",
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            
        },
        "Big deposit": {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
             Neteller: {
                greenBoxInfo: "Transaction amount: Any amount. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: instant bank transfer, no limits / regular bank transfer, no limits / Card payment up to 5k a day / You can wd (once the money is in) in crypto (2k gbp limit per day) / Anyways you need to be smart and not wd everything in one day / Tested wd of crypto to exodus and binance, worked / Accepted 40+ countries / You can order physical card for 10$ or virtual card for free.",
                redBoxInfo: "You can use it to deposit up to 500 eur with no kyc at all.",
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
    },

    Hong_Kong: {
        STD: {
             Neteller: {
                greenBoxInfo: "Transaction amount: Any amount. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: instant bank transfer, no limits / regular bank transfer, no limits / Card payment up to 5k a day / You can wd (once the money is in) in crypto (2k gbp limit per day) / Anyways you need to be smart and not wd everything in one day / Tested wd of crypto to exodus and binance, worked / Accepted 40+ countries / You can order physical card for 10$ or virtual card for free.",
                redBoxInfo: "You can use it to deposit up to 500 eur with no kyc at all.",
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            
        },
        "Big deposit": {
             Neteller: {
                greenBoxInfo: "Transaction amount: Any amount. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: instant bank transfer, no limits / regular bank transfer, no limits / Card payment up to 5k a day / You can wd (once the money is in) in crypto (2k gbp limit per day) / Anyways you need to be smart and not wd everything in one day / Tested wd of crypto to exodus and binance, worked / Accepted 40+ countries / You can order physical card for 10$ or virtual card for free.",
                redBoxInfo: "You can use it to deposit up to 500 eur with no kyc at all.",
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
    },

     Japan: {
        STD: {
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
        },
        "Big deposit": {
           Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
        },
    },

    UAE: {
        STD: {
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
        },
        "Big deposit": {
           Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
        },
    },
    
    Oman: {
        STD: {
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
        "Big deposit": {
           Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
    },
    Saudi_Arabia: {
        STD: {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
        "Big deposit": {
           Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
    },
    Iceland: {
        STD: {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
        "Big deposit": {
           Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
    },
    Greenland: {
        STD: {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
        "Big deposit": {
           Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
    },
    Sweeden: {
        STD: {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
        "Big deposit": {
           Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
    },
    South_Africa: {
        STD: {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Luno: {
                greenBoxInfo: "Transaction amount: LEVEL 1 - EUR1.000 / LEVEL 2 - EUR5.000 per month / LEVEL 3 - No Limit. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: ZA only instant bank transfer. Malaysia works the same way as Help2Pay. WD LIMIT IS BASED ON ACC LEVEL. LEVEL 1 - EUR1.000 Lifetime. LEVEL 2 - EUR5.000 per month. LEVEL 3 - No limit",
                redBoxInfo: "For account verification there are three levels: LEVEL 1 - Cofirm your mobile number + basic perosnal details / LEVEL 2 - Submit a photo of ID and a selfie / LEVEL 3 - Enter residential addres + emplyment status + SOF",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
        "Big deposit": {
           Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Luno: {
                greenBoxInfo: "Transaction amount: LEVEL 1 - EUR1.000 / LEVEL 2 - EUR5.000 per month / LEVEL 3 - No Limit. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: ZA only instant bank transfer. Malaysia works the same way as Help2Pay. WD LIMIT IS BASED ON ACC LEVEL. LEVEL 1 - EUR1.000 Lifetime. LEVEL 2 - EUR5.000 per month. LEVEL 3 - No limit",
                redBoxInfo: "For account verification there are three levels: LEVEL 1 - Cofirm your mobile number + basic perosnal details / LEVEL 2 - Submit a photo of ID and a selfie / LEVEL 3 - Enter residential addres + emplyment status + SOF",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
        },
    },

    
};

export { companyOptions, companyInfo };
