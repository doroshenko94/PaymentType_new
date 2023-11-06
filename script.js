import { companyOptions, companyInfo } from './data.js';

const countrySelect = document.getElementById("countrySelect");
const companySelect = document.getElementById("companySelect");
const transactionToggle = document.getElementById("transactionToggle"); // Изменили идентификатор

const greenBoxInfo = document.getElementById("greenBoxInfo");
const yellowBoxCompanyInfo = document.getElementById("yellowBoxCompanyInfo");
const redBoxCompanyInfo = document.getElementById("redBoxCompanyInfo");

countrySelect.addEventListener("change", function () {
    const selectedCountry = this.value;
    transactionToggle.disabled = false; // Изменили элемент, чтобы учитывать кнопки-переключатели
    companySelect.disabled = true; // Добавили, чтобы учитывать выпадающий список
    transactionToggle.innerHTML = ""; // Очищаем кнопки-переключатели

    if (selectedCountry === "default") {
        transactionToggle.disabled = true;
        companySelect.disabled = true;
        greenBoxInfo.textContent = "";
        yellowBoxCompanyInfo.textContent = "";
        redBoxCompanyInfo.textContent = "";
    } else {
        // Создаем кнопки-переключатели для типа транзакции
        const transactionTypes = Object.keys(companyInfo[selectedCountry]);
        transactionTypes.forEach(function (type) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "btn btn-secondary";
            button.setAttribute("data-value", type);
            button.textContent = type;
            transactionToggle.appendChild(button);
        });
    }
});

transactionToggle.addEventListener("click", function (event) { // Изменили обработчик событий
    if (event.target.tagName === "BUTTON") {
        const selectedCountry = countrySelect.value;
        const selectedTransaction = event.target.getAttribute("data-value");
        companySelect.disabled = false;
        companySelect.innerHTML = "<option value='default'>Select the type of payment:</option>";

        if (selectedTransaction !== "default" && selectedCountry in companyOptions) {
            const companies = companyOptions[selectedCountry];
            companies.forEach(function (company) {
                const option = document.createElement("option");
                option.value = company;
                option.text = company;
                companySelect.appendChild(option);
            });
        }

        greenBoxInfo.textContent = "";
        yellowBoxCompanyInfo.textContent = "";
        redBoxCompanyInfo.textContent = "";
    }
});

companySelect.addEventListener("change", function () {
    const selectedCountry = countrySelect.value;
    const selectedTransaction = transactionToggle.querySelector(".active").getAttribute("data-value"); // Получите выбранный тип транзакции
    const selectedCompany = this.value;

    if (selectedCountry !== "default" && selectedTransaction !== "default" && selectedCompany !== "default") {
        const transactionInfo = companyInfo[selectedCountry][selectedTransaction][selectedCompany];
        greenBoxInfo.textContent = transactionInfo.greenBoxInfo;
        yellowBoxCompanyInfo.textContent = transactionInfo.yellowBoxInfo;
        redBoxCompanyInfo.textContent = transactionInfo.redBoxInfo;
    }
});
