// data.js
const companyOptions = {
    UK: ["Revolut", "Curve", "Zen","Wirex","Roobic","Pockit","Gemini"],
    Ireland: ["Revolut", "Zen","Wirex","Roobic","Pockit","Gemini"],
    Italy: ["Revolut", "Curve", "Bintence_Wire", "Zen","Wirex"],
    Denmark: ["Adv2", "Advcash", "W1tty", "Bit2me","BestWallet", "Wise", "uphold"],
    Canada: ["Adv2","Advcash","W1tty","Bit2me","BitBuy","MyBTC","ndax","BullBitcoin","Bestwallet","Wise","uphold",],
    New_Zeland: ["Simplex","Adv2","Advcash","W1tty","Bit2me","Bestwallet","Wise","uphold",],
    Bermuda: ["W1tty","Bestwallet","uphold",],
    Switzerland: ["Revolut", "Zen", "Cryptocom", "AdvCash", "AdV2", "W1tty", "Bit2me", "Wise", "Bestwallet", "uphold"],
    // Добавьте другие страны и компании по аналогии
};

const companyInfo = {
    UK: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 69. If you have revolut more than 6 months you can use normally meaning that you can add 10k immediately if not then you are restricted to 2k per day and 10k per month",
                yellowBoxInfo: "UK: First transfer through bank transfer max is 2k then you need to wait 24 hours and after you can do 10k per transaction",
                redBoxInfo: "Revolut up to the age of 69 and then bintense: Open with them before you pitch, REVOLUT."
            },
            Curve: {
                greenBoxInfo: "Curve you can download and install, credit the account and use virtual card on moonpay, similar process to revolut.",
                yellowBoxInfo: "You can use credit card to top up which is useful",
                redBoxInfo: "Not sure of age limit."
            },
            Zen: {
                greenBoxInfo: "Max you can do through Zen now is between 250$ - 10.000$ no more does not pass large amounts.",
                yellowBoxInfo: "First transaction UK via wire must be 1.000$ only. Then you can do total 5.000$ next day",
                redBoxInfo: "ZEN up to 2k: BANK TRANSFER: INSTANT VERIFICATIONs"
            },
            Wirex: {
                greenBoxInfo: " -Name / -Email / -Address / -ID / -Selfie. Funding the account: - Easy bank transfer, put amount, select bank, prompts you to log into your online banking then you accept the transfer.         Changing from Fiat to crypto: - Only change to ETH OR BTC - Leave on the account for 24 hours  ",
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
                greenBoxInfo: "AGE: 18 - 69. If you have revolut more than 6 months you can use normally meaning that you can add 10k immediately if not then you are restricted to 2k per day and 10k per month",
                yellowBoxInfo: "UK: First transfer through bank transfer max is 2k then you need to wait 24 hours and after you can do 10k per transaction",
                redBoxInfo: "Revolut up to the age of 69 and then bintense: Open with them before you pitch, REVOLUT."
            },
            Zen: {
                greenBoxInfo: "Max you can do through Zen now is between 250$ - 10.000$ no more does not pass large amounts.",
                yellowBoxInfo: "First transaction UK via wire must be 1.000$ only. Then you can do total 5.000$ next day",
                redBoxInfo: "ZEN up to 2k: BANK TRANSFER: INSTANT VERIFICATIONs"
            },
            Wirex: {
                greenBoxInfo: " -Name / -Email / -Address / -ID / -Selfie. Funding the account: - Easy bank transfer, put amount, select bank, prompts you to log into your online banking then you accept the transfer.         Changing from Fiat to crypto: - Only change to ETH OR BTC - Leave on the account for 24 hours  ",
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

    Italy: {
        STD: {
            Revolut: {
                greenBoxInfo: "If you have Revolut more than 6 months you can use normally meaning that you can add 10k immediately if not then you are restricted to 2k per day and 10k per month",
                yellowBoxInfo: "",
                redBoxInfo: "Who Revolut works with: Bintense, Simplex, Zen"
            },
            Bintence_Wire: {
                greenBoxInfo: "",
                yellowBoxInfo: "",
                redBoxInfo: "You can not use BINTENSE WIRE"
            },
            Zen: {
                greenBoxInfo: "Max you can do through Zen now is between 250$ - 10.000$ no more does not pass large amounts.",
                yellowBoxInfo: "Italy can do 5k first transaction one go",
                redBoxInfo: ""
            },
            Wirex: {
                greenBoxInfo: " -Name / -Email / -Address / -ID / -Selfie. Funding the account: - Easy bank transfer, put amount, select bank, prompts you to log into your online banking then you accept the transfer.         Changing from Fiat to crypto: - Only change to ETH OR BTC - Leave on the account for 24 hours  ",
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
                greenBoxInfo: "If you have Revolut more than 6 months you can use normally meaning that you can add 10k immediately if not then you are restricted to 2k per day and 10k per month",
                yellowBoxInfo: "",
                redBoxInfo: "Who Revolut works with: Bintense, Simplex, Zen"
            },
            Bintence_Wire: {
                greenBoxInfo: "",
                yellowBoxInfo: "",
                redBoxInfo: "You can not use BINTENSE WIRE"
            },
            Zen: {
                greenBoxInfo: "Max you can do through Zen now is between 250$ - 10.000$ no more does not pass large amounts.",
                yellowBoxInfo: "Italy can do 5k first transaction one go",
                redBoxInfo: ""
            },
            Wirex: {
                greenBoxInfo: " -Name / -Email / -Address / -ID / -Selfie. Funding the account: - Easy bank transfer, put amount, select bank, prompts you to log into your online banking then you accept the transfer.         Changing from Fiat to crypto: - Only change to ETH OR BTC - Leave on the account for 24 hours  ",
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
    
};

export { companyOptions, companyInfo };
