// data.js
const companyOptions = {
    UK: ["Revolut", "Curve", "Zen","Pockit","Banxa","Rampnetwork","BitGet","Safewirepay",],
    Ireland: ["Revolut", "Zen", "Pockit","Crypto_com", "MEXC","Banxa","Rampnetwork","BitGet",],
    Italy: ["Revolut", "Bintence_Wire", "Zen","MEXC","Banxa","Rampnetwork",],
    Denmark: ["Revolut", "Zen","MEXC","Adv2", "Advcash", "W1tty", "Bit2me","BestWallet", "Banxa","Rampnetwork","BitGet",],
    Malasiya: ["Bybit","Luno","Paybis","Banxa","Rampnetwork", "Luno","BitGet",],
    Canada: ["NDAX","Newton","Safewirepay","Bintense","Easypayments",],
    New_Zeland: ["Revolut","Paybis","Safewirepay","BitGet",],
    Bermuda: ["Bestwallet", "Gemini",],
    Switzerland: ["Zen", "Bintence","MEXC", "Cryptocom", "AdvCash", "AdV2", "Bit2me", "Bestwallet","Banxa","Rampnetwork",],
    Norway: ["Revolut","Binance","Banxa","Rampnetwork",],
    Bahamas: ["Safewirepay",],
    Singapore: ["Revolut","Rampnetwork",],
    Hong_Kong: ["Rampnetwork", "Bintense",],
    Japan: ["Banxa","BitGet","Revolut",],
    UAE: ["Banxa","Rampnetwork","Bintense",],
    Oman: ["Wise",],
    Saudi_Arabia:["Banxa","Wise",],
    Iceland:["Revolut","Banxa","Rampnetwork","BitGet",],
    Greenland:["Banxa","Rampnetwork","Wise","BitGet",],
    Sweeden:["Banxa","Rampnetwork","Wise",],
    South_Africa:["Banxa","Rampnetwork", "Luno","Wise","BitGet","VALR",],
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
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
            },
            Safewirepay : {
                greenBoxInfo: "This is a solution we have inhouse that you can open an account in their personal name, for the UK it will be a local account with sort code and account number, bank that this account is with is to be confirmed ",
                yellowBoxInfo: "The process is the following way: Register the client / Selected that you will be doing crypto related transactions / Selected numbered account / Make payment / Submit documents / Compliance will email a document to print and sign. Then within 5 working days they will be issue a personal account with sort cod and account number ",
                redBoxInfo: "First transaction from UK to this account should be $2.000 and then any amount"
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
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
            },
            Safewirepay : {
                greenBoxInfo: "This is a solution we have inhouse that you can open an account in their personal name, for the UK it will be a local account with sort code and account number, bank that this account is with is to be confirmed ",
                yellowBoxInfo: "The process is the following way: Register the client / Selected that you will be doing crypto related transactions / Selected numbered account / Make payment / Submit documents / Compliance will email a document to print and sign. Then within 5 working days they will be issue a personal account with sort cod and account number ",
                redBoxInfo: "First transaction from UK to this account should be $2.000 and then any amount"
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
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
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
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
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
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
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
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
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
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
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
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
            },
        },
    },

    Canada: {
        STD: {
            Newton: {
                greenBoxInfo: "Transaction amount: CAD10-CAD50.000. Permitted age: 19 and up to no age limit. NOT DO more than 3.000CAD for the first transaction. Open exodus and send the money there. / 72 HOURS TO VERIFY ",
                yellowBoxInfo: "Deposit options: Interac e-transfer minimum CAD10 maximum CAD10,000 per transaction; Weekly limit CAD50,000. Wire transfer Minimum CAD10,000 maximum CAD1,000,000. Crypto withdrawal limits: 5 transactions per day. ",
                redBoxInfo: "For accout verification you need ID, POA (sometimes) and Selfie. They might ask for the client to complete an investor questionare at a certain point in oreder to grant full services. / UNTESTED ",
            },
              Safewirepay : {
                greenBoxInfo: "There is no limit on age or transaction the client needs to be over 18",
                yellowBoxInfo: "This will creat a SEPA account for the clinet in the chosen currency. When registering the clinet will need to select a NUMBERED ACCOUNT. The client will be charged 10EUR at this stage",
                redBoxInfo: "Client will need to provide paperwork on the intended use of the account. This is a wire transfer. Client will need to go to bank in order to complete the transfer."
            },
            Bintense: {
                greenBoxInfo: "SEE BINTENSE SECTION",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
             Easypayments : {
                greenBoxInfo: "There is no age limit. Up to 5.000 CAD it will be with them through interac and above 5.000 CAD it will be local bank transfer.",
                yellowBoxInfo: "Verification steps to include that the client needs: ID, POA and Live check",
                redBoxInfo: "This is not a crypto deposit its 5% commission and risk for 60 days so no payment on commission for 60 days.",
            },
            
        },
        "Big deposit": {
            NDAX: {
                    greenBoxInfo: "72 HOURS TO VERIFY ",
                    yellowBoxInfo: "",
                    redBoxInfo: "3.000 CAD limit per transaction per day. ",
                },
             Newton: {
                greenBoxInfo: "Transaction amount: CAD10-CAD50.000. Permitted age: 19 and up to no age limit. NOT DO more than 3.000CAD for the first transaction. Open exodus and send the money there. / 72 HOURS TO VERIFY ",
                yellowBoxInfo: "Deposit options: Interac e-transfer minimum CAD10 maximum CAD10,000 per transaction; Weekly limit CAD50,000. Wire transfer Minimum CAD10,000 maximum CAD1,000,000. Crypto withdrawal limits: 5 transactions per day. ",
                redBoxInfo: "For accout verification you need ID, POA (sometimes) and Selfie. They might ask for the client to complete an investor questionare at a certain point in oreder to grant full services. / UNTESTED ",
            },
              Safewirepay : {
                greenBoxInfo: "There is no limit on age or transaction the client needs to be over 18",
                yellowBoxInfo: "This will creat a SEPA account for the clinet in the chosen currency. When registering the clinet will need to select a NUMBERED ACCOUNT. The client will be charged 10EUR at this stage",
                redBoxInfo: "Client will need to provide paperwork on the intended use of the account. This is a wire transfer. Client will need to go to bank in order to complete the transfer."
            },
            Bintense: {
                greenBoxInfo: "SEE BINTENSE SECTION",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
             Easypayments : {
                greenBoxInfo: "There is no age limit. Up to 5.000 CAD it will be with them through interac and above 5.000 CAD it will be local bank transfer.",
                yellowBoxInfo: "Verification steps to include that the client needs: ID, POA and Live check",
                redBoxInfo: "This is not a crypto deposit its 5% commission and risk for 60 days so no payment on commission for 60 days.",
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
            Paybis: {
                greenBoxInfo: "DV2 AND ADV2CASH AND BIT2ME AND BESTWALLET:  NOT TESTED YET IF YOU USE MAKE CRM AWARE OF SUCCESS",
                yellowBoxInfo: "",
                redBoxInfo: "All NZ banks have a 0 CRYPTO POLICY",
            },
           Safewirepay : {
                greenBoxInfo: "There is no limit on age or transaction the client needs to be over 18",
                yellowBoxInfo: "This will creat a SEPA account for the clinet in the chosen currency. When registering the clinet will need to select a NUMBERED ACCOUNT. The client will be charged 10EUR at this stage",
                redBoxInfo: "Client will need to provide paperwork on the intended use of the account. This is a wire transfer"
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard. WD is not possible",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
            },
        },
        "Big deposit": {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Safewirepay : {
                greenBoxInfo: "There is no limit on age or transaction the client needs to be over 18",
                yellowBoxInfo: "This will creat a SEPA account for the clinet in the chosen currency. When registering the clinet will need to select a NUMBERED ACCOUNT. The client will be charged 10EUR at this stage",
                redBoxInfo: "Client will need to provide paperwork on the intended use of the account. This is a wire transfer"
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard. WD is not possible",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
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
        },
        "Big deposit": {
            Gemini: {
                greenBoxInfo: "Need Information",
                yellowBoxInfo: "",
                redBoxInfo: "",
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
                redBoxInfo: "The first time you have to add 2FA and you can choose google auth or email much better.then you you can send and put OTP received on email and by sms. for USDT TRC20 you have 0.93 cent in transfers on 10k on ERC20 you have 3,74 eur. fee. 10/15 minutes before receive (its written on the app). / NOT TESTED YET"
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
        },
    },

    Bahamas: {
        STD: {
             Safewirepay : {
                greenBoxInfo: "There is no limit on age or transaction the client needs to be over 18",
                yellowBoxInfo: "This will creat a SEPA account for the clinet in the chosen currency. When registering the clinet will need to select a NUMBERED ACCOUNT. The client will be charged 10EUR at this stage",
                redBoxInfo: "Client will need to provide paperwork on the intended use of the account. This is a wire transfer. Client will need to go to bank in order to complete the transfer."
            },
            
        },
        "Big deposit": {
             Safewirepay : {
                greenBoxInfo: "There is no limit on age or transaction the client needs to be over 18",
                yellowBoxInfo: "This will creat a SEPA account for the clinet in the chosen currency. When registering the clinet will need to select a NUMBERED ACCOUNT. The client will be charged 10EUR at this stage",
                redBoxInfo: "Client will need to provide paperwork on the intended use of the account. This is a wire transfer. Client will need to go to bank in order to complete the transfer."
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
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
        },
    },

    Hong_Kong: {
        STD: {
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
             Bintense: {
                greenBoxInfo: "SEE BINTENSE SECTION",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            
        },
        "Big deposit": {
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
             Bintense: {
                greenBoxInfo: "SEE BINTENSE SECTION",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
        },
    },

     Japan: {
        STD: {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
            },
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
        },
        "Big deposit": {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
            },
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
        },
    },

    UAE: {
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
            Bintense: {
                greenBoxInfo: "SEE BINTENSE SECTION",
                yellowBoxInfo: "",
                redBoxInfo: "",
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
            Bintense: {
                greenBoxInfo: "SEE BINTENSE SECTION",
                yellowBoxInfo: "",
                redBoxInfo: "",
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
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
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
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
            },
        },
        "Big deposit": {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
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
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
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
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
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
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
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
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
            },
             VALR: {
                greenBoxInfo: "Transaction amount: $0-depends on deposit method. Permitted age: 18 and up not specified",
                yellowBoxInfo: "Deposit options: Visa/MaterCard, EFT and WireTransfer. Client can deposit in USD through WireTransfer. Crypto WD 0.2BTC/day. Crypto WD with 2FA 100BTC/day",
                redBoxInfo: "For account verification: ID and Selfie. 24h withdrawal freez when depositing with card from the moment that you click on the WD button in app"
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
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay 14-9.100EUR/12-8.000GBP/15-10.000USD. They offer deposit with third-party procesors. They offer BankTransfer. Crypto WD limit without KYC $20,000 a day/$100,000 a month. WITH KYC daily limit goes to $3,000,000. SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP8,000",
                redBoxInfo: "For account verification you need ID and a Selfie. They have photo and video instructions from KYC we can send to clients. They have their own ColdWallets. THEY ARE PARTNERED WITH METAMASK. For a single transaction that is over 5.000 they will ask for a source of funds for UK"
            },
            VALR: {
                greenBoxInfo: "Transaction amount: $0-depends on deposit method. Permitted age: 18 and up not specified",
                yellowBoxInfo: "Deposit options: Visa/MaterCard, EFT and WireTransfer. Client can deposit in USD through WireTransfer. Crypto WD 0.2BTC/day. Crypto WD with 2FA 100BTC/day",
                redBoxInfo: "For account verification: ID nad Selfie. Not confirmed:  24h withdrawal freez when depositing with card from the moment that you click on the WD button in app"
            },
        },
    },

    
};

export { companyOptions, companyInfo };
