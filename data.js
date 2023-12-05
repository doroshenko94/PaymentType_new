// data.js
const companyOptions = {
    UK: ["Revolut", "Curve", "Zen","Pockit", "Woltbit","Coinjar","Neteller","Skrill",],
    Ireland: ["Revolut", "Zen", "Pockit","Crypto_com","Skrill","Woltbit","Coinjar","MEXC",],
    Italy: ["Revolut", "Bintence_Wire", "Zen","MEXC","Skrill",],
    Denmark: ["Revolut", "Zen","MEXC","Adv2", "Advcash", "W1tty", "Bit2me","BestWallet", "Wise","Skrill","Woltbit","Coinjar",],
    Malasiya: ["Bybit","Skrill",],
    Canada: ["NDAX","Adv2","Advcash","Bit2me","BitBuy","MyBTC","ndax","BullBitcoin","Bestwallet","Wise","Skrill",],
    New_Zeland: ["Zen","Simplex","Adv2","Advcash","Bit2me","Bestwallet","Wise","Skrill","Bybit","Paybis", "MoonPay",],
    Bermuda: ["Bestwallet","Skrill",],
    Switzerland: ["Zen", "Bintence","MEXC", "Cryptocom", "AdvCash", "AdV2", "Bit2me", "Bestwallet","Skrill",],
    Australia:["W1tty","Bestwallet","Skrill",],
    // Добавьте другие страны и компании по аналогии
};

const companyInfo = {
    UK: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 69. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 69 and then bintense: Open with them before you pitch, REVOLUT.",
            },
            Curve: {
                greenBoxInfo: "Curve you can download and install, credit the account and use virtual card on moonpay, similar process to revolut.",
                yellowBoxInfo: "You can use credit card to top up which is useful. Not sure of age limit.",
                redBoxInfo: "CURVE it is like revolut you can use a virtual card. You can top up with high street banks, you can use credit cards, and work with MOONPAY.",
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
                yellowBoxInfo: "Register with details: Confirm email / ID & Selfie / Verified within minutes / ",
                redBoxInfo: "You can transfer to COLD wallets ",
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

        },
        "Big deposit": {
            Woltbit: {
                greenBoxInfo: "Transaction amount: 250$-50,000$. Permitted age: 18-65",
                yellowBoxInfo: "Woltbit - like roobic and bintense conbimbed. Offers personal accounts local transfer to the UK. Risk is 60 days.You have a link from support, like bintense open the account, you register the cloent ",
                redBoxInfo: "",
            },
            Coinjar: {
                greenBoxInfo: "Transaction amount: Any amount. Permitted age: 18-75",
                yellowBoxInfo: "Register with details: Confirm email / ID & Selfie / Verified within minutes /",
                redBoxInfo: "You can transfer to COLD wallets ",
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
        },
    },

Ireland: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 69. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 69 and then bintense: Open with them before you pitch, REVOLUT.",
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
                yellowBoxInfo: "Register with details: Confirm email / ID & Selfie / Verified within minutes / ",
                redBoxInfo: "You can transfer to COLD wallets ",
            },
            MEXC: {
                greenBoxInfo: "-Name / -Email / -Address / -ID / -Selfie. Limit 10.000 per day",
                yellowBoxInfo: "Done 10.000$ trx with MEXC. We did in usdt ut later we find how to do also eth. you receive money, then change in crypto clicking on transfer then withdrawl and you have 2 options like revolut and the first one exchange crypto.",
                redBoxInfo: "The first time you have to add 2FA and you can choose google auth or email much better.then you you can send and put OTP received on email and by sms. for USDT TRC20 you have 0.93 cent in transfers on 10k on ERC20 you have 3,74 eur. fee. 10/15 minutes before receive (its written on the app). / NOT TESTED YET"
            },
        },
    },

    Italy: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 69. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 69 and then bintense: Open with them before you pitch, REVOLUT.",
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
                greenBoxInfo: "-Name / -Email / -Address / -ID / -Selfie. Limit 10.000 per day",
                yellowBoxInfo: "Done 10.000$ trx with MEXC. We did in usdt ut later we find how to do also eth. you receive money, then change in crypto clicking on transfer then withdrawl and you have 2 options like revolut and the first one exchange crypto.",
                redBoxInfo: "The first time you have to add 2FA and you can choose google auth or email much better.then you you can send and put OTP received on email and by sms. for USDT TRC20 you have 0.93 cent in transfers on 10k on ERC20 you have 3,74 eur. fee. 10/15 minutes before receive (its written on the app)"
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
        },
    },


    Denmark: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 69. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 69 and then bintense: Open with them before you pitch, REVOLUT.",
            },
            Zen: {
                greenBoxInfo: "Zen, you transfer max 5k here, you need to convert to ETH and leave for one day before you transfer the funds.",
                yellowBoxInfo: "First transaction UK via wire must be 1.000$ only. Then you can do total 5.000$ next day",
                redBoxInfo: "ZEN up to 2k: BANK TRANSFER: INSTANT VERIFICATIONs",
            },
            Adv2: {
                greenBoxInfo: "DEPOSIT LIMIT: CC - €4862 - fees 2.9% . SEPA - €4505 - fees €1-€5. / WITHDRAWAL LIMIT: USDT - 3016 per trx. BTC - 0.20 per trx",
                yellowBoxInfo: "BUY CRYPTO: FROM BALANCE - TO ADV WALLET - $3000. FROM BALANCE - TO EXTERNAL WALLET - $6000. NO CC BUY OPTION AVAILABLE",
                redBoxInfo: "KYC: Yes - Phone/ID/Selfie/Address",
            },
            Advcash: {
                greenBoxInfo: "DEPOSIT LIMIT: CC - $9000 - per day",
                yellowBoxInfo: "BUY CRYPTO: WITH CC - $10000 - per day. FROM BALANCE - $100.000",
                redBoxInfo: "KYC:- Yes - Phone/ID/Selfie. / SEPA - not available in Cyprus to check",
            },
            Bit2me: {
                greenBoxInfo: "DEPOSIT LIMIT: up to €999 no kyc with google pay, card or bank transfer €1000+ need kyc. Fiat deposit - wire transfer no limit - cc €5000/day. / WITHDRAWAL LIMIT: Crypto withdrawals no limit",
                yellowBoxInfo: "BUY CRYPTO: with cc €5000/day - from fiat wallet no limit",
                redBoxInfo: "KYC: yes for transaction €1000+",
            },
            BestWallet: {
                greenBoxInfo: "TRANSACTION NO KYC: yes up to $1050",
                yellowBoxInfo: "BUY CRYPTO: YES -up to $1050 no KYC",
                redBoxInfo: "KYC: yes for transaction $1050+",
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
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
                yellowBoxInfo: "Register with details: Confirm email / ID & Selfie / Verified within minutes /",
                redBoxInfo: "You can transfer to COLD wallets ",
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
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
        },
        "Big deposit": {
           Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
        },
    },

    Canada: {
        STD: {
            Adv2: {
                greenBoxInfo: "DEPOSIT LIMIT: CC - €4862 - fees 2.9% . SEPA - €4505 - fees €1-€5. / WITHDRAWAL LIMIT: USDT - 3016 per trx. BTC - 0.20 per trx",
                yellowBoxInfo: "BUY CRYPTO: FROM BALANCE - TO ADV WALLET - $3000. FROM BALANCE - TO EXTERNAL WALLET - $6000. NO CC BUY OPTION AVAILABLE",
                redBoxInfo: "KYC: Yes - Phone/ID/Selfie/Address",
            },
            Advcash: {
                greenBoxInfo: "DEPOSIT LIMIT: CC - $9000 - per day",
                yellowBoxInfo: "BUY CRYPTO: WITH CC - $10000 - per day. FROM BALANCE - $100.000",
                redBoxInfo: "KYC: Yes - Phone/ID/Selfie/Address. / SEPA - not available in Cyprus to check",
            },
            Bit2me: {
                greenBoxInfo: "DEPOSIT LIMIT: Up to €999 no KYC with google pay, card or bank transfer. €1000+ need KYC. Fiat deposit - wire transfer no limit - cc €5000/day. / WITHDRAWAL LIMIT: Crypto withdrawals no limit",
                yellowBoxInfo: "BUY CRYPTO - with cc €5000/day - from fiat wallet no limit",
                redBoxInfo: "KYC: yes for transaction €1000+",
            },
            Bestwallet: {
                greenBoxInfo: "TRANSACTION NO KYC: yes up to $1050",
                yellowBoxInfo: "BUY CRYPTO: YES -up to $1050 no KYC",
                redBoxInfo: "KYC: YES - ID/DL - SELFIE",
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
        },
        "Big deposit": {
                NDAX: {
                    greenBoxInfo: "",
                    yellowBoxInfo: "",
                    redBoxInfo: "",
                },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
        },
    },


    New_Zeland: {
        STD: {
            Simplex: {
                greenBoxInfo: "AGE: 18 - 65. Limits on the cards for revolut 2.000$ per day maximum 10.000$ per month",
                yellowBoxInfo: "Works only with card. Card Visa or Mastercard will not work with UK Highstreet banks or Ireland needs to be Revol",
                redBoxInfo: "YOU CAN ONLY USE THIS SOLUTION FOR NZ IF YOU HAVE KIWI BANK",
            },
            Adv2: {
                greenBoxInfo: "DEPOSIT LIMIT: CC - €4862 - fees 2.9% . SEPA - €4505 - fees €1-€5. / WITHDRAWAL LIMIT: USDT - 3016 per trx. BTC - 0.20 per trx",
                yellowBoxInfo: "BUY CRYPTO: FROM BALANCE - TO ADV WALLET - $3000. FROM BALANCE - TO EXTERNAL WALLET - $6000. NO CC BUY OPTION AVAILABLE",
                redBoxInfo: "KYC: Yes - Phone/ID/Selfie/Address. / Works only with Kiwi bank",
            },
            Advcash: {
                greenBoxInfo: "DEPOSIT LIMIT: CC - $9000 - per day",
                yellowBoxInfo: "BUY CRYPTO: WITH CC - $10000 - per day. FROM BALANCE - $100.000",
                redBoxInfo: "KYC:- Yes - Phone/ID/Selfie. / SEPA - not available in Cyprus to check",
            },
            Bit2me: {
                 greenBoxInfo: "DEPOSIT LIMIT: Up to €999 no kyc with google pay, card or bank transfer €1000+ need kyc. Fiat deposit - wire transfer no limit - cc €5000/day. / WITHDRAWAL LIMIT: Crypto withdrawals no limit",
                yellowBoxInfo: "BUY CRYPTO: with cc €5000/day - from fiat wallet no limit",
                redBoxInfo: "KYC: yes for transaction €1000+",
            },
            Bestwallet: {
                greenBoxInfo: "TRANSACTION NO KYC: yes up to $1050",
                yellowBoxInfo: "BUY CRYPTO: YES -up to $1050 no KYC",
                redBoxInfo: "KYC: yes for transaction $1050+",
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
            Bybit: {
                greenBoxInfo: "",
                yellowBoxInfo: "YOU CAN ONLY USE THIS SOLUTION FOR NZ IF YOU HAVE KIWI BANK",
                redBoxInfo: "DV2 AND ADV2CASH AND BIT2ME AND BESTWALLET:  NOT TESTED YET IF YOU USE MAKE CRM AWARE OF SUCCESS",
            },
            Paybis: {
                greenBoxInfo: "",
                yellowBoxInfo: "YOU CAN ONLY USE THIS SOLUTION FOR NZ IF YOU HAVE KIWI BANK",
                redBoxInfo: "DV2 AND ADV2CASH AND BIT2ME AND BESTWALLET:  NOT TESTED YET IF YOU USE MAKE CRM AWARE OF SUCCESS",
            },
            MoonPay: {
                greenBoxInfo: "",
                yellowBoxInfo: "YOU CAN ONLY USE THIS SOLUTION FOR NZ IF YOU HAVE KIWI BANK",
                redBoxInfo: "DV2 AND ADV2CASH AND BIT2ME AND BESTWALLET:  NOT TESTED YET IF YOU USE MAKE CRM AWARE OF SUCCESS",
            },
        },
        "Big deposit": {
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
        },
    },

     Bermuda: {
        STD: {
            Bestwallet: {
                greenBoxInfo: "TRANSACTION NO KYC: yes up to $1050",
                yellowBoxInfo: "BUY CRYPTO: YES -up to $1050 no KYC",
                redBoxInfo: "NOT TESTED YET, IF YOU USE - MAKE CRM AWARE OF SUCCESS ",
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
                greenBoxInfo: "",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bit2me: {
                greenBoxInfo: "DEPOSIT LIMIT: up to €999 no kyc with google pay, card or bank. Fiat deposit - wire transfer no limit - cc €5000/day. / Buy crypto - with cc €5000/day - from fiat wallet no limit",
                yellowBoxInfo: "WITHDRAWAL LIMIT: Crypto withdrawals no limit",
                redBoxInfo: "KYC: yes for transaction €1000+",
            },
        
            Bestwallet: {
                greenBoxInfo: "TRANSACTION NO KYC: yes up to $1050.",
                yellowBoxInfo: "BUY CRYPTO: YES -up to $1050 no KYC",
                redBoxInfo: "KYC: yes for transaction $1050+",
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
        },
        "Big deposit": {
            MEXC: {
                greenBoxInfo: "",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Skrill: {
                greenBoxInfo: "Transaction amount: Up to 5k by Card Or with no limits on easy bank transfer or bank transfer LOCAL. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: regular bank transfer, no limits €500,000.00  Fees 0%  Card Deposits (1% fee): Before adding any card it is showing max deposit 700-900 depends from the currency but as soon as you add a card then the limits are increasing up to 5k EUR & USD. For GBP is 4,300 the max deposit from card. ",
                redBoxInfo: "Easy and simple steps: You need to verify (ID, POA and Selfie) - Verified in minutes. Just top-up the account, NOT needed to BUY any Crypto. You can get a virtual card for free if you have at least €0.01 on your Skrill account Tested wd of crypto to exodus and binance, worked",
            },
        },
    },

    
};

export { companyOptions, companyInfo };
