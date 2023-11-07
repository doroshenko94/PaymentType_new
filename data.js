// data.js
const companyOptions = {
    UK: ["Revolut", "Curve", "Zen","Wirex","Roobic","Pockit","Gemini"],
    Ireland: ["Revolut", "Zen","Wirex","Roobic","Pockit","Gemini"],
    Italy: ["Revolut", "Bintence_Wire", "Zen","Wirex"],
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
                greenBoxInfo: " -Name / -Email / -Address / -ID / -Selfie",
                yellowBoxInfo: "Funding the account: - Easy bank transfer, put amount, select bank, prompts you to log into your online banking then you accept the transfer.         Changing from Fiat to crypto: - Only change to ETH OR BTC - Leave on the account for 24 hours ",
                redBoxInfo: "Withdrawing: - You can withdraw to an exodus wallet / - Withdrawals take 24-48 hours to approval"
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
        },
        "Big deposit": {
            Revolut: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: ""
            },
            Curve: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Zen: {
                greenBoxInfo: "No information",
                yellowBoxInfo: "",
                redBoxInfo: ""
            },
            Wirex: {
                greenBoxInfo: "Need to confirm, has easy bank transfer, seems to have bigger limits than Gemini, transferred in less than 12 hours to exodus.",
                yellowBoxInfo: "Checking a larger amount. 5,000 easy bank transfer instant.",
                redBoxInfo: "Barclays and HSBC worked."
            },
            Roobic: {
                greenBoxInfo: "Up to $50.000",
                yellowBoxInfo: "",
                redBoxInfo: "Agents commission would be 7%"
            },
            Gemini: {
                greenBoxInfo: "You need to verify the bank account, and leave the money there for five days.",
                yellowBoxInfo: "",
                redBoxInfo: "Agents commission would be 8%"
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
                greenBoxInfo: " -Name / -Email / -Address / -ID / -Selfie",
                yellowBoxInfo: "Funding the account: - Easy bank transfer, put amount, select bank, prompts you to log into your online banking then you accept the transfer.         Changing from Fiat to crypto: - Only change to ETH OR BTC - Leave on the account for 24 hours ",
                redBoxInfo: "Withdrawing: - You can withdraw to an exodus wallet / - Withdrawals take 24-48 hours to approval"
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
        },
        "Big deposit": {
            Wirex: {
                greenBoxInfo: "Need to confirm, has easy bank transfer, seems to have bigger limits than Gemini, transferred in less than 12 hours to exodus.",
                yellowBoxInfo: "Checking a larger amount. 5,000 easy bank transfer instant.",
                redBoxInfo: "Barclays and HSBC worked."
            },
            Roobic: {
                greenBoxInfo: "Up to $50.000",
                yellowBoxInfo: "",
                redBoxInfo: "Agents commission would be 7%"
            },
            Gemini: {
                greenBoxInfo: "You need to verify the bank account, and leave the money there for five days.",
                yellowBoxInfo: "",
                redBoxInfo: "Agents commission would be 8%"
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
                greenBoxInfo: "0",
                yellowBoxInfo: "0",
                redBoxInfo: "0"
            },
        },
        "Big deposit": {
            Revolut: {
                greenBoxInfo: "Big deposit Revolut",
                yellowBoxInfo: "Big deposit Revolut",
                redBoxInfo: "Big deposit Revolut"
            },
            Curve: {
                greenBoxInfo: "ффффф",
                yellowBoxInfo: "фывафывафыва",
                redBoxInfo: "фываывафыв",
            },
        },
    },
    
};

export { companyOptions, companyInfo };
