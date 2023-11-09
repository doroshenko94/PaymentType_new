// data.js
const companyOptions = {
    UK: ["Revolut", "Curve", "Zen","Wirex","Roobic","Pockit","Gemini"],
    Ireland: ["Revolut", "Zen","Wirex","Roobic","Pockit","Gemini","Crypto_com",],
    Italy: ["Revolut", "Curve", "Bintence_Wire", "Zen","Wirex"],
    Denmark: ["Revolut", "Zen","Adv2", "Advcash", "W1tty", "Bit2me","BestWallet", "Wise", "uphold"],
    Malasiya: ["Bybit", "Paybis","Moonpay","Invity", "Simplex", "Coinmama",],
    Canada: ["Roobic","Adv2","Advcash","W1tty","Bit2me","BitBuy","MyBTC","ndax","BullBitcoin","Bestwallet","Wise","uphold",],
    New_Zeland: ["Roobic","Simplex","Adv2","Advcash","W1tty","Bit2me","Bestwallet","Wise","uphold",],
    Bermuda: ["W1tty","Bestwallet","uphold",],
    Switzerland: ["Revolut", "Zen", "Cryptocom", "AdvCash", "AdV2", "W1tty", "Bit2me", "Wise", "Bestwallet", "uphold"],
    Australia:["Roobic","W1tty","Bestwallet","uphold",],
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
            Wirex: {
                greenBoxInfo: " -Name / -Email / -Address / -ID / -Selfie.  You have easy bank transfer, instantly lands, need to convert to ETH and leave for one day, withdrawals take 24-48 hours..         Changing from Fiat to crypto: - Only change to ETH OR BTC - Leave on the account for 24 hours  ",
                yellowBoxInfo: "Withdrawing: - You can withdraw to an exodus wallet / - Withdrawals take 24-48 hours to approval",
                redBoxInfo: "PLEASE NOTE THAT FOR BOTH GEMINI AND WIREX WITHDRAWALS ARE NOT INSTANT, WIREX SEEMS LIKE 24 HOURS MAX AND GEMINI CAN BE 5 BUSINESS DAYS. In these cases I would credit the money to the trading account so you are not held up, trade carefully and then wait until money is in the trading account before you make your next move, this is only to be done on the 3rd deposit of the client."
            },
            Roobic: {
                greenBoxInfo: "Roobic.io client needs to do on their side, they need to upload all docs, no recall and then they get bank details and make the transfer from their bank account to their Roobic local bank account.",
                yellowBoxInfo: "Commission for the agent: 6%",
                redBoxInfo: "**** FROM 69 TO 80 USE THIS SOLUTION*****"
            },
            Pockit: {
                greenBoxInfo: "Pockit up to 2k and then moonpay:",
                yellowBoxInfo: "Open with them before you pitch Pockit. Up to the age of 69",
                redBoxInfo: "Commission for the agent: 8%"
            },
            Gemini: {
                greenBoxInfo: " -Name / -Email / -Address / -ID / -Selfie. Funding the account: - Easy bank transfer, put amount, select bank, prompts you to log into your online banking then you accept the transfer.         Changing from Fiat to crypto: - Only change to ETH OR BTC - Leave on the account for 24 hours  ",
                yellowBoxInfo: "Withdrawing: - You can withdraw to an exodus wallet / - Withdrawals take 24-48 hours to approval",
                redBoxInfo: "PLEASE NOTE THAT FOR BOTH GEMINI AND WIREX WITHDRAWALS ARE NOT INSTANT, WIREX SEEMS LIKE 24 HOURS MAX AND GEMINI CAN BE 5 BUSINESS DAYS. In these cases I would credit the money to the trading account so you are not held up, trade carefully and then wait until money is in the trading account before you make your next move, this is only to be done on the 3rd deposit of the client."
            },
        },
        "Big deposit": {
            Wirex: {
                greenBoxInfo: "Need to confirm, has easy bank transfer, seems to have bigger limits than Gemini, transferred in less than 12-24 hours to exodus. Checking a larger amount. 5,000 easy bank transfer instant.",
                yellowBoxInfo: "Barclays and HSBC worked.",
                redBoxInfo: "PLEASE NOTE THAT FOR BOTH GEMINI AND WIREX WITHDRAWALS ARE NOT INSTANT, WIREX SEEMS LIKE 24 HOURS MAX AND GEMINI CAN BE 5 BUSINESS DAYS. In these cases I would credit the money to the trading account so you are not held up, trade carefully and then wait until money is in the trading account before you make your next move, this is only to be done on the 3rd deposit of the client."
            },
            Roobic: {
                greenBoxInfo: "Up to $50.000",
                yellowBoxInfo: "",
                redBoxInfo: "Agents commission would be 7%"
            },
            Gemini: {
                greenBoxInfo: "You need to verify the bank account, and leave the money there for five days.",
                yellowBoxInfo: "Agents commission would be 8%",
                redBoxInfo: "PLEASE NOTE THAT FOR BOTH GEMINI AND WIREX WITHDRAWALS ARE NOT INSTANT, WIREX SEEMS LIKE 24 HOURS MAX AND GEMINI CAN BE 5 BUSINESS DAYS. In these cases I would credit the money to the trading account so you are not held up, trade carefully and then wait until money is in the trading account before you make your next move, this is only to be done on the 3rd deposit of the client."
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
            Wirex: {
                greenBoxInfo: " -Name / -Email / -Address / -ID / -Selfie.  You have easy bank transfer, instantly lands, need to convert to ETH and leave for one day, withdrawals take 24-48 hours..         Changing from Fiat to crypto: - Only change to ETH OR BTC - Leave on the account for 24 hours  ",
                yellowBoxInfo: "Withdrawing: - You can withdraw to an exodus wallet / - Withdrawals take 24-48 hours to approval",
                redBoxInfo: "PLEASE NOTE THAT FOR BOTH GEMINI AND WIREX WITHDRAWALS ARE NOT INSTANT, WIREX SEEMS LIKE 24 HOURS MAX AND GEMINI CAN BE 5 BUSINESS DAYS. In these cases I would credit the money to the trading account so you are not held up, trade carefully and then wait until money is in the trading account before you make your next move, this is only to be done on the 3rd deposit of the client."
            },
            Roobic: {
                greenBoxInfo: "Roobic.io client needs to do on their side, they need to upload all docs, no recall and then they get bank details and make the transfer from their bank account to their Roobic local bank account.",
                yellowBoxInfo: "Commission for the agent: 6%",
                redBoxInfo: "**** FROM 69 TO 80 USE THIS SOLUTION*****"
            },
            Pockit: {
                greenBoxInfo: "Pockit up to 2k and then moonpay:",
                yellowBoxInfo: "Open with them before you pitch Pockit. Up to the age of 69",
                redBoxInfo: "Commission for the agent: 8%"
            },
             Gemini: {
                greenBoxInfo: " -Name / -Email / -Address / -ID / -Selfie. Funding the account: - Easy bank transfer, put amount, select bank, prompts you to log into your online banking then you accept the transfer.         Changing from Fiat to crypto: - Only change to ETH OR BTC - Leave on the account for 24 hours  ",
                yellowBoxInfo: "Withdrawing: - You can withdraw to an exodus wallet / - Withdrawals take 24-48 hours to approval",
                redBoxInfo: "PLEASE NOTE THAT FOR BOTH GEMINI AND WIREX WITHDRAWALS ARE NOT INSTANT, WIREX SEEMS LIKE 24 HOURS MAX AND GEMINI CAN BE 5 BUSINESS DAYS. In these cases I would credit the money to the trading account so you are not held up, trade carefully and then wait until money is in the trading account before you make your next move, this is only to be done on the 3rd deposit of the client."
            },
            Crypto_com: {
                greenBoxInfo: "Wire transfer 1st time $1000, then you can move more.",
                yellowBoxInfo: "No specific limits",
                redBoxInfo: ""
            },
        },
        "Big deposit": {
            Wirex: {
                greenBoxInfo: "Need to confirm, has easy bank transfer, seems to have bigger limits than Gemini, transferred in less than 12-24 hours to exodus. Checking a larger amount. 5,000 easy bank transfer instant.",
                yellowBoxInfo: "Barclays and HSBC worked.",
                redBoxInfo: "PLEASE NOTE THAT FOR BOTH GEMINI AND WIREX WITHDRAWALS ARE NOT INSTANT, WIREX SEEMS LIKE 24 HOURS MAX AND GEMINI CAN BE 5 BUSINESS DAYS. In these cases I would credit the money to the trading account so you are not held up, trade carefully and then wait until money is in the trading account before you make your next move, this is only to be done on the 3rd deposit of the client."
            },
            Roobic: {
                greenBoxInfo: "Up to $50.000",
                yellowBoxInfo: "",
                redBoxInfo: "Agents commission would be 7%"
            },
            Gemini: {
                greenBoxInfo: "You need to verify the bank account, and leave the money there for five days.",
                yellowBoxInfo: "Agents commission would be 8%",
                redBoxInfo: "PLEASE NOTE THAT FOR BOTH GEMINI AND WIREX WITHDRAWALS ARE NOT INSTANT, WIREX SEEMS LIKE 24 HOURS MAX AND GEMINI CAN BE 5 BUSINESS DAYS. In these cases I would credit the money to the trading account so you are not held up, trade carefully and then wait until money is in the trading account before you make your next move, this is only to be done on the 3rd deposit of the client."
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
            Wirex: {
                greenBoxInfo: " -Name / -Email / -Address / -ID / -Selfie.  You have easy bank transfer, instantly lands, need to convert to ETH and leave for one day, withdrawals take 24-48 hours..         Changing from Fiat to crypto: - Only change to ETH OR BTC - Leave on the account for 24 hours  ",
                yellowBoxInfo: "Withdrawing: - You can withdraw to an exodus wallet / - Withdrawals take 24-48 hours to approval",
                redBoxInfo: "PLEASE NOTE THAT FOR BOTH GEMINI AND WIREX WITHDRAWALS ARE NOT INSTANT, WIREX SEEMS LIKE 24 HOURS MAX AND GEMINI CAN BE 5 BUSINESS DAYS. In these cases I would credit the money to the trading account so you are not held up, trade carefully and then wait until money is in the trading account before you make your next move, this is only to be done on the 3rd deposit of the client."
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
            Wirex: {
                greenBoxInfo: " -Name / -Email / -Address / -ID / -Selfie. Funding the account: - Easy bank transfer, put amount, select bank, prompts you to log into your online banking then you accept the transfer.         Changing from Fiat to crypto: - Only change to ETH OR BTC - Leave on the account for 24 hours.",
                yellowBoxInfo: "Withdrawing: - You can withdraw to an exodus wallet / - Withdrawals take 24-48 hours to approval",
                redBoxInfo: "PLEASE NOTE THAT FOR BOTH GEMINI AND WIREX WITHDRAWALS ARE NOT INSTANT, WIREX SEEMS LIKE 24 HOURS MAX AND GEMINI CAN BE 5 BUSINESS DAYS. In these cases I would credit the money to the trading account so you are not held up, trade carefully and then wait until money is in the trading account before you make your next move, this is only to be done on the 3rd deposit of the client."
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
            uphold: {
                greenBoxInfo: "DEPOSIT LIMIT: CC - €500/DAY - €3500/WEEK - €10000/MONTH. SEPA - NO LIMIT. / WITHDRAWAL LIMIT: Crypto withdrawals no limit",
                yellowBoxInfo: "WITHDRAWAL LIMIT: USDT - 3016 per trx BTC - 0.20 per trx",
                redBoxInfo: "KYC: YES - ID/DL - SELFIE",
            },
        },
        "Big deposit": {
            Adv2: {
                greenBoxInfo: "",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Advcash: {
                greenBoxInfo: "",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            W1tty: {
                greenBoxInfo: "",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bit2me: {
                greenBoxInfo: "",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            BestWallet: {
                greenBoxInfo: "",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Wise: {
                greenBoxInfo: "",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            uphold: {
                greenBoxInfo: "",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
        },
    },

     Malasiya: {
        STD: {
            Bybit: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Paybis: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Moonpay: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Invity: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Simplex: {
                 greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Coinmama: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
        },
        "Big deposit": {
           Bybit: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Paybis: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Moonpay: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Invity: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Simplex: {
                 greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Coinmama: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
        },
    },

    Canada: {
        STD: {
            Roobic: {
                greenBoxInfo: "Create the wise account, do not connect with the client at all with any screen sharing, create a personal account, and fund the personal wise account, convert the funds into EUR. Once the account is funded then you create the Roobic.io account, create a SEPA order and then yousend the money from the wise account in EUR to your own account in Roobic in Malta in your name.",
                yellowBoxInfo: "",
                redBoxInfo: "NO RECALL!",
            },
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
            W1tty: {
                greenBoxInfo: "Need testing",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bit2me: {
                greenBoxInfo: "DEPOSIT LIMIT: Up to €999 no KYC with google pay, card or bank transfer. €1000+ need KYC. Fiat deposit - wire transfer no limit - cc €5000/day. / WITHDRAWAL LIMIT: Crypto withdrawals no limit",
                yellowBoxInfo: "BUY CRYPTO - with cc €5000/day - from fiat wallet no limit",
                redBoxInfo: "KYC: yes for transaction €1000+",
            },
            BitBuy: {
                 greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            MyBTC: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            ndax: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            BullBitcoin: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bestwallet: {
                greenBoxInfo: "TRANSACTION NO KYC: yes up to $1050",
                yellowBoxInfo: "BUY CRYPTO: YES -up to $1050 no KYC",
                redBoxInfo: "KYC: YES - ID/DL - SELFIE",
            },
            Wise: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            uphold: {
                greenBoxInfo: "DEPOSIT LIMIT: CC - €500/DAY - €3500/WEEK - €10000/MONTH. SEPA - NO LIMIT.",
                yellowBoxInfo: "WITHDRAWAL LIMIT: Crypto withdrawals no limit",
                redBoxInfo: "KYC: YES - ID/DL - SELFIE",
            },
        },
        "Big deposit": {
           Adv2: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Advcash: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            W1tty: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bit2me: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            BitBuy: {
                 greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            MyBTC: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            ndax: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            BullBitcoin: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bestwallet: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Wise: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            uphold: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
        },
    },


    New_Zeland: {
        STD: {
            Roobic: {
                greenBoxInfo: "Create the wise account, do not connect with the client at all with any screen sharing, create a personal account, and fund the personal wise account, convert the funds into EUR. Once the account is funded then you create the Roobic.io account, create a SEPA order and then yousend the money from the wise account in EUR to your own account in Roobic in Malta in your name.",
                yellowBoxInfo: "",
                redBoxInfo: "NO RECALL!",
            },
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
            Wise: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            uphold: {
                greenBoxInfo: "DEPOSIT LIMIT: CC - €500/DAY - €3500/WEEK - €10000/MONTH. SEPA - NO LIMIT. / WITHDRAWAL LIMIT: Crypto withdrawals no limit",
                yellowBoxInfo: "WITHDRAWAL LIMIT: USDT - 3016 per trx BTC - 0.20 per trx",
                redBoxInfo: "KYC: YES - ID/DL - SELFIE",
            },
        },
        "Big deposit": {
           Simplex: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Adv2: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Advcash: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            W1tty: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bit2me: {
                 greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bestwallet: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Wise: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            uphold: {
                greenBoxInfo: "No information",
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
            uphold: {
                greenBoxInfo: "DEPOSIT LIMIT: CC - €500/DAY - €3500/WEEK - €10000/MONTH. SEPA - NO LIMIT. / WITHDRAWAL LIMIT: Crypto withdrawals no limit",
                yellowBoxInfo: "WITHDRAWAL LIMIT: USDT - 3016 per trx BTC - 0.20 per trx",
                redBoxInfo: "KYC: YES - ID/DL - SELFIE",
            },
        },
        "Big deposit": {
           W1tty: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bestwallet: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            uphold: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
        },
    },

    Switzerland: {
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
            Cryptocom: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            AdvCash: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            AdV2: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            W1tty: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bit2me: {
                greenBoxInfo: "DEPOSIT LIMIT: up to €999 no kyc with google pay, card or bank. Fiat deposit - wire transfer no limit - cc €5000/day. / Buy crypto - with cc €5000/day - from fiat wallet no limit",
                yellowBoxInfo: "WITHDRAWAL LIMIT: Crypto withdrawals no limit",
                redBoxInfo: "KYC: yes for transaction €1000+",
            },
            Wise: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bestwallet: {
                greenBoxInfo: "TRANSACTION NO KYC: yes up to $1050.",
                yellowBoxInfo: "BUY CRYPTO: YES -up to $1050 no KYC",
                redBoxInfo: "KYC: yes for transaction $1050+",
            },
            uphold: {
                greenBoxInfo: "DEPOSIT LIMIT: CC - €500/DAY - €3500/WEEK - €10000/MONTH. SEPA - NO LIMIT",
                yellowBoxInfo: "WITHDRAWAL LIMIT: Crypto withdrawals no limit",
                redBoxInfo: "KYC: YES - ID/DL - SELFIE",
            },
        },
        "Big deposit": {
          Revolut: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Zen: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Cryptocom: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            AdvCash: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            AdV2: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            W1tty: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bit2me: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Wise: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bestwallet: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            uphold: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
        },
    },

    Australia : {
        STD: {
            Roobic: {
                greenBoxInfo: "Create the wise account, do not connect with the client at all with any screen sharing, create a personal account, and fund the personal wise account, convert the funds into EUR. Once the account is funded then you create the Roobic.io account, create a SEPA order and then yousend the money from the wise account in EUR to your own account in Roobic in Malta in your name.",
                yellowBoxInfo: "",
                redBoxInfo: "NO RECALL!",
            },
            W1tty: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bestwallet: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            uphold: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
        },
        "Big deposit": {
           W1tty: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bestwallet: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            uphold: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
        },
    },
    
};

export { companyOptions, companyInfo };
