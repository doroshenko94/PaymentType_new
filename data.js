// data.js
const companyOptions = {
    UK: ["Revolut", "Curve"],
    // Добавьте другие страны и компании по аналогии
};

const companyInfo = {
    UK: {
        STD: {
            Revolut: {
                greenBoxInfo: "STD Revolut",
                yellowBoxInfo: "STD Revolut",
                redBoxInfo: "STD Revolut"
            },
            Curve: {
                greenBoxInfo: "Curve you can download and install, credit the account and use a virtual card on moonpay, similar process to Revolut.",
                yellowBoxInfo: "You can use a credit card to top up, which is useful",
                redBoxInfo: "Not sure of the age limit."
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
