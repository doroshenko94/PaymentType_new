// data.js
const companyOptions = {
    UK: ["Revolut", "Curve", "Zen","Pockit", "Woltbit","Coinjar","Neteller","Skrill","Banxa","Rampnetwork"],
    Ireland: ["Revolut", "Zen", "Pockit","Crypto_com","Skrill","Woltbit","Coinjar","MEXC","Banxa",],
    Italy: ["Revolut", "Bintence_Wire", "Zen","MEXC","Skrill","Banxa","Rampnetwork"],
    Denmark: ["Revolut", "Zen","MEXC","Adv2", "Advcash", "W1tty", "Bit2me","BestWallet", "Wise","Skrill","Woltbit","Coinjar","Banxa",],
    Malasiya: ["Bybit","Skrill","Luno","Paybis","Banxa","Rampnetwork"],
    Canada: ["NDAX","Adv2","Advcash","Bit2me","BitBuy","MyBTC","ndax","BullBitcoin","Bestwallet","Wise","Skrill","Wealthsimple","Newton","Banxa","Rampnetwork"],
    New_Zeland: ["Zen","Simplex","Adv2","Advcash","Bit2me","Bestwallet","Wise","Skrill","Bybit","Paybis", "MoonPay","Woltbit","Banxa","Rampnetwork"],
    Bermuda: ["Bestwallet","Skrill","Gemini",],
    Switzerland: ["Zen", "Bintence","MEXC", "Cryptocom", "AdvCash", "AdV2", "Bit2me", "Bestwallet","Skrill","Banxa","Rampnetwork"],
    Norway: ["Revolut","Binance","Banxa","Rampnetwork"],
    Bahamas: ["Neteller","Skrill","Wise",],
    Singapore: ["Revolut","Neteller","Skrill","Rampnetwork"],
    Hong_Kong: ["Neteller","Skrill","Rampnetwork"],
    Japan: ["Wise","Banxa",],
    UAE: ["Wise","Banxa","Rampnetwork"],
    Oman: ["Wise",],
    Saudi_Arabia:["Banxa",],
    Iceland:["Banxa",],
    Greenland:["Banxa",],
    Sweeden:["Banxa","Rampnetwork"],
    South_Africa:["Banxa","Rampnetwork"],
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
            Woltbit: {
                greenBoxInfo: "Transaction amount: 250$-50,000$. Permitted age: 18-65",
                yellowBoxInfo: "Woltbit- like roobic and bintense conbimbed. Offers personal accounts local transfer to the UK. Risk is 60 days.You have a link from support, like bintense open the account, you register the cloent ",
                redBoxInfo: "Does not work with Barclays bank",
            },
            Coinjar: {
                greenBoxInfo: "Transaction amount: Any amount. Permitted age: 18-75",
                yellowBoxInfo: "Register with details: Confirm email / ID & Selfie / Verified within minutes / Deposit methods you have bank details which I have also sent you via tele so the agents can see how it looks, not in clients name but local account details. SO WHEN THEY CHOOSE TRANSFER ITS TO A BUISNESS ACCOUNT. ",
                redBoxInfo: "You can transfer to COLD wallets.\n \n They might ask for a questionare: \nYour estimated monthly deposit and withdrawal volume (how much money you are looking to deposit into CoinJar each month)\nYour estimated monthly buy and sell volume in GBP (how much money you will be converting to and from digital currencies each month)\nYour estimated monthly send and receive volume in GBP (how much money you plan to send and receive with CoinJar each month)\nYour estimated monthly send and receive volume in GBP (how much money you plan to send and receive with CoinJar each month)\nThe nature of your business relationship with CoinJar (what you plan to use CoinJar for now and in the future)\nHas anyone asked you to create this CoinJar account for an investment opportunity?\nDoes anyone else have access to the device you use to access your CoinJar?\nDo you understand that digital currency transactions are impossible to reverse, and your bank and CoinJar have no way to reverse transactions if you discover you have fallen victim to a scam or have a change of mind at a later date?\nPlease provide a screenshot of your wallet displaying the receiving address ending in thztmwrz to verify ownership. ",
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
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
            },

        },
        "Big deposit": {
            Woltbit: {
                greenBoxInfo: "Transaction amount: 250$-50,000$. Permitted age: 18-65",
                yellowBoxInfo: "Woltbit - like roobic and bintense conbimbed. Offers personal accounts local transfer to the UK. Risk is 60 days.You have a link from support, like bintense open the account, you register the cloent ",
                redBoxInfo: "",
            },
            Coinjar: {
                greenBoxInfo: "Transaction amount: Any amount. Permitted age: 18-75",
                yellowBoxInfo: "Register with details: Confirm email / ID & Selfie / Verified within minutes / Deposit methods you have bank details which I have also sent you via tele so the agents can see how it looks, not in clients name but local account details. SO WHEN THEY CHOOSE TRANSFER ITS TO A BUISNESS ACCOUNT. ",
                redBoxInfo: "You can transfer to COLD wallets.\n \n They might ask for a questionare: \nYour estimated monthly deposit and withdrawal volume (how much money you are looking to deposit into CoinJar each month)\nYour estimated monthly buy and sell volume in GBP (how much money you will be converting to and from digital currencies each month)\nYour estimated monthly send and receive volume in GBP (how much money you plan to send and receive with CoinJar each month)\nYour estimated monthly send and receive volume in GBP (how much money you plan to send and receive with CoinJar each month)\nThe nature of your business relationship with CoinJar (what you plan to use CoinJar for now and in the future)\nHas anyone asked you to create this CoinJar account for an investment opportunity?\nDoes anyone else have access to the device you use to access your CoinJar?\nDo you understand that digital currency transactions are impossible to reverse, and your bank and CoinJar have no way to reverse transactions if you discover you have fallen victim to a scam or have a change of mind at a later date?\nPlease provide a screenshot of your wallet displaying the receiving address ending in thztmwrz to verify ownership. ",
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
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            
        },
        "Big deposit": {
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
            Crypto_com: {
                greenBoxInfo: "Wire transfer 1st time $1000, then you can move more.",
                yellowBoxInfo: "No specific limits",
                redBoxInfo: ""
            },
            Woltbit: {
                greenBoxInfo: "Transaction amount: 250$-50,000$. Permitted age: 18-65",
                yellowBoxInfo: "Woltbit - like roobic and bintense conbimbed. Offers personal accounts local transfer to the UK. Risk is 60 days.You have a link from support, like bintense open the account, you register the cloent ",
                redBoxInfo: "",
            },
            Coinjar: {
                greenBoxInfo: "Transaction amount: Any amount. Permitted age: 18-75",
                yellowBoxInfo: "Register with details: Confirm email / ID & Selfie / Verified within minutes / Deposit methods you have bank details which I have also sent you via tele so the agents can see how it looks, not in clients name but local account details. SO WHEN THEY CHOOSE TRANSFER ITS TO A BUISNESS ACCOUNT. ",
                redBoxInfo: "You can transfer to COLD wallets.\n \n They might ask for a questionare: \nYour estimated monthly deposit and withdrawal volume (how much money you are looking to deposit into CoinJar each month)\nYour estimated monthly buy and sell volume in GBP (how much money you will be converting to and from digital currencies each month)\nYour estimated monthly send and receive volume in GBP (how much money you plan to send and receive with CoinJar each month)\nYour estimated monthly send and receive volume in GBP (how much money you plan to send and receive with CoinJar each month)\nThe nature of your business relationship with CoinJar (what you plan to use CoinJar for now and in the future)\nHas anyone asked you to create this CoinJar account for an investment opportunity?\nDoes anyone else have access to the device you use to access your CoinJar?\nDo you understand that digital currency transactions are impossible to reverse, and your bank and CoinJar have no way to reverse transactions if you discover you have fallen victim to a scam or have a change of mind at a later date?\nPlease provide a screenshot of your wallet displaying the receiving address ending in thztmwrz to verify ownership. ",
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
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
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
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
        },
        "Big deposit": {
             Woltbit: {
                greenBoxInfo: "Transaction amount: 250$-50,000$. Permitted age: 18-65",
                yellowBoxInfo: "Woltbit - like roobic and bintense conbimbed. Offers personal accounts local transfer to the UK. Risk is 60 days.You have a link from support, like bintense open the account, you register the cloent ",
                redBoxInfo: "",
            },
            Coinjar: {
                greenBoxInfo: "Transaction amount: Any amount. Permitted age: 18-75",
                yellowBoxInfo: "Register with details: Confirm email / ID & Selfie / Verified within minutes / Deposit methods you have bank details which I have also sent you via tele so the agents can see how it looks, not in clients name but local account details. SO WHEN THEY CHOOSE TRANSFER ITS TO A BUISNESS ACCOUNT. ",
                redBoxInfo: "You can transfer to COLD wallets.\n \n They might ask for a questionare: \nYour estimated monthly deposit and withdrawal volume (how much money you are looking to deposit into CoinJar each month)\nYour estimated monthly buy and sell volume in GBP (how much money you will be converting to and from digital currencies each month)\nYour estimated monthly send and receive volume in GBP (how much money you plan to send and receive with CoinJar each month)\nYour estimated monthly send and receive volume in GBP (how much money you plan to send and receive with CoinJar each month)\nThe nature of your business relationship with CoinJar (what you plan to use CoinJar for now and in the future)\nHas anyone asked you to create this CoinJar account for an investment opportunity?\nDoes anyone else have access to the device you use to access your CoinJar?\nDo you understand that digital currency transactions are impossible to reverse, and your bank and CoinJar have no way to reverse transactions if you discover you have fallen victim to a scam or have a change of mind at a later date?\nPlease provide a screenshot of your wallet displaying the receiving address ending in thztmwrz to verify ownership. ",
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
            MEXC: {
                greenBoxInfo: "DAILY transaction limit to be changed to 8,000EUR for BIG TRANSACTIONS",
                yellowBoxInfo: "Done 10.000$ trx with MEXC. We did in usdt ut later we find how to do also eth. you receive money, then change in crypto clicking on transfer then withdrawl and you have 2 options like revolut and the first one exchange crypto.",
                redBoxInfo: "The first time you have to add 2FA and you can choose google auth or email much better.then you you can send and put OTP received on email and by sms. for USDT TRC20 you have 0.93 cent in transfers on 10k on ERC20 you have 3,74 eur. fee. 10/15 minutes before receive (its written on the app) / NOT TESTED YET"
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
        },
    },

     Malasiya: {
        STD: {
           Bybit: {
                greenBoxInfo: "Daily limit 10.000$",
                yellowBoxInfo: "Work with credit cards",
                redBoxInfo: "KYC: YES - ID/DL - SELFIE",
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
            },
        },
        "Big deposit": {
           Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
           Luno: {
                greenBoxInfo: "Need Information",
                yellowBoxInfo: "",
                redBoxInfo: "",
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
            Wealthsimple: {
                greenBoxInfo: "Transaction amount: no minimum - Up to limit for transaction type. Permitted age: 19 and up to no age limit.",
                yellowBoxInfo: "Deposit options: Linked Visa/Master Debit card $3.500 per day $35.000 per month. No limit for wire transfer deposit. Interac transaction limit CAD3.000 per transaction; Maximum CAD10,000 per week; CAD20,000 per month. Crypto WD limit of CAD10,000 a day/CAD25,000 a week. No limits on buying BTC and ETH",
                redBoxInfo: "For account verification you need ID, POA and Selfie. / UNTESTED",
            },
            Newton: {
                greenBoxInfo: "Transaction amount: CAD10-CAD50.000. Permitted age: 19 and up to no age limit. NOT DO more than 3.000CAD for the first transaction. Open exodus and send the money there. ",
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
            },
        },
        "Big deposit": {
                NDAX: {
                    greenBoxInfo: "",
                    yellowBoxInfo: "",
                    redBoxInfo: "3.000 CAD limit per transaction per day. ",
                },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
            Wealthsimple: {
                greenBoxInfo: "Transaction amount: no minimum - Up to limit for transaction type. Permitted age: 19 and up to no age limit.",
                yellowBoxInfo: "Deposit options: Linked Visa/Master Debit card $3.500 per day $35.000 per month. No limit for wire transfer deposit. Interac transaction limit CAD3.000 per transaction; Maximum CAD10,000 per week; CAD20,000 per month. Crypto WD limit of CAD10,000 a day/CAD25,000 a week. No limits on buying BTC and ETH",
                redBoxInfo: "For account verification you need ID, POA and Selfie. / UNTESTED",
            },
             Newton: {
                greenBoxInfo: "Transaction amount: CAD10-CAD50.000. Permitted age: 19 and up to no age limit. NOT DO more than 3.000CAD for the first transaction. Open exodus and send the money there. ",
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
            },
        },
    },


    New_Zeland: {
        STD: {
            Simplex: {
                greenBoxInfo: "AGE: 18 - 75. Limits on the cards for Revolut 2.000$ per day maximum 10.000$ per month",
                yellowBoxInfo: "Works only with card. Card Visa or Mastercard will not work with UK Highstreet banks or Ireland needs to be Revol",
                redBoxInfo: "All NZ banks have a 0 CRYPTO POLICY",
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
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
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
            MoonPay: {
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
            },
        },
        "Big deposit": {
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
            Woltbit: {
                greenBoxInfo: "Transaction amount: 250$-50,000$. Permitted age: 18-65",
                yellowBoxInfo: "Woltbit - like roobic and bintense conbimbed. Offers personal accounts local transfer to the UK. Risk is 60 days.You have a link from support, like bintense open the account, you register the cloent ",
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
        },
        "Big deposit": {
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
        },
        "Big deposit": {
           Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
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
        },
        "Big deposit": {
           Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
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
        },
        "Big deposit": {
           Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 65 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
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
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF"
            },
        },
    },

    
};

export { companyOptions, companyInfo };
