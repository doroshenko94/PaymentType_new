// data.js
const companyOptions = {
    UK: ["Revolut", "Curve", "Zen","Wirex"],
    Ireland: ["Revolut", "Zen","Wirex"],
    Italy: ["Revolut", "Bintence_Wire" "Zen","Wirex"],
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
