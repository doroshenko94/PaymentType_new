// data.js
const companyOptions = {
    UK: ["Revolut", "Curve", "Zen","Pockit", "Woltbit",],
    Ireland: ["Revolut", "Zen", "Pockit","Crypto_com","Woltbit",],
    Italy: ["Revolut", "Curve", "Bintence_Wire", "Zen","MEXC","Woltbit",],
    Denmark: ["Revolut", "Zen","MEXC","Adv2", "Advcash", "W1tty", "Bit2me","BestWallet", "Wise",],
    Malasiya: ["Bybit",],
    Canada: ["NDAX","Adv2","Advcash","Bit2me","BitBuy","MyBTC","ndax","BullBitcoin","Bestwallet","Wise","Woltbit",],
    New_Zeland: ["Zen","Simplex","Adv2","Advcash","W1tty","Bit2me","Bestwallet","Wise","Woltbit",],
    Bermuda: ["W1tty","Bestwallet",],
    Switzerland: ["Zen", "Bintence","MEXC", "Cryptocom", "AdvCash", "AdV2", "Bit2me", "Bestwallet","Woltbit",],
    Australia:["W1tty","Bestwallet",],
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
                greenBoxInfo: "Woltbit-like Roobic and Bintense conbimbed. Offers personal accounts local transfer to the UK. Age limit 75 but they are negotiable.",
                yellowBoxInfo: "Offers to Europe as well: Malta account.",
                redBoxInfo: "Risk is 60 days.",
            },
        },
        "Big deposit": {
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
            Woltbit: {
                greenBoxInfo: "Woltbit-like Roobic and Bintense conbimbed. Offers personal accounts local transfer to the UK. Age limit 75 but they are negotiable.",
                yellowBoxInfo: "Offers to Europe as well: Malta account.",
                redBoxInfo: "Risk is 60 days.",
            },
        },
        "Big deposit": {
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
            Woltbit: {
                greenBoxInfo: "Woltbit-like Roobic and Bintense conbimbed. Offers personal accounts local transfer to the UK. Age limit 75 but they are negotiable.",
                yellowBoxInfo: "Offers to Europe as well: Malta account.",
                redBoxInfo: "Risk is 60 days.",
            },
        },
        "Big deposit": {
            Revolut: {
                greenBoxInfo: "Revolut, you can not move more than 2k a day and 10k a month through crypto",
                yellowBoxInfo: "You will need to convert the fiat to ETH and then transfer daily",
                redBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step."
            },
            Curve: {
                greenBoxInfo: "CURVE it is like revolut you can use a virtual card.",
                yellowBoxInfo: "You can top up with high street banks, you can use credit cards, and work with MOONPAY.",
                redBoxInfo: ""
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
        },
        "Big deposit": {
             MEXC: {
                greenBoxInfo: "",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
             Zen: {
                greenBoxInfo: "",
                yellowBoxInfo: "",
                redBoxInfo: "",
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
        },
        "Big deposit": {
           
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
            Woltbit: {
                greenBoxInfo: "Woltbit-like Roobic and Bintense conbimbed. Offers personal accounts local transfer to the UK. Age limit 75 but they are negotiable.",
                yellowBoxInfo: "Offers to Europe as well: Malta account.Plus you have Canada and Newzeland through wise.",
                redBoxInfo: "Risk is 60 days.",
            },
        },
        "Big deposit": {
                NDAX: {
                    greenBoxInfo: "",
                    yellowBoxInfo: "",
                    redBoxInfo: "",
                },
        },
    },


    New_Zeland: {
        STD: {
            Simplex: {
                greenBoxInfo: "AGE: 18 - 65. Limits on the cards for revolut 2.000$ per day maximum 10.000$ per month",
                yellowBoxInfo: "Works only with card. Maximum transactions here 250$ - 10.000$",
                redBoxInfo: "Card Visa or Mastercard will not work with UK Highstreet banks or Ireland needs to be Revolut.",
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
            W1tty: {
                greenBoxInfo: "Need testing",
                yellowBoxInfo: "",
                redBoxInfo: "",
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
            Woltbit: {
                greenBoxInfo: "Woltbit-like Roobic and Bintense conbimbed. Offers personal accounts local transfer to the UK. Age limit 75 but they are negotiable.",
                yellowBoxInfo: "Offers to Europe as well: Malta account.Plus you have Canada and Newzeland through wise.",
                redBoxInfo: "Risk is 60 days.",
            },
        },
        "Big deposit": {
            Zen: {
                greenBoxInfo: "",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
        },
    },

     Bermuda: {
        STD: {
            W1tty: {
                greenBoxInfo: "Need testing",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bestwallet: {
                greenBoxInfo: "TRANSACTION NO KYC: yes up to $1050",
                yellowBoxInfo: "BUY CRYPTO: YES -up to $1050 no KYC",
                redBoxInfo: "KYC: yes for transaction $1050+",
            },
        },
        "Big deposit": {
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
            Woltbit: {
                greenBoxInfo: "Woltbit-like Roobic and Bintense conbimbed. Offers personal accounts local transfer to the UK. Age limit 75 but they are negotiable.",
                yellowBoxInfo: "Offers to Europe as well: Malta account.",
                redBoxInfo: "Risk is 60 days.",
            },
        },
        "Big deposit": {
            MEXC: {
                greenBoxInfo: "",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
        },
    },

    
};

export { companyOptions, companyInfo };
