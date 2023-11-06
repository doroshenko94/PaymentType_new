import { companyOptions, companyInfo } from './data.js';

const countrySelect = document.getElementById("countrySelect");
const companySelect = document.getElementById("companySelect");
const transactionSelect = document.getElementById("transactionSelect");
const transactionToggle = document.getElementById("transactionToggle"); // Изменили идентификатор

const greenBoxInfo = document.getElementById("greenBoxInfo");
const yellowBoxCompanyInfo = document.getElementById("yellowBoxCompanyInfo");
const redBoxCompanyInfo = document.getElementById("redBoxCompanyInfo");

countrySelect.addEventListener("change", function () {
    const selectedCountry = this.value;
    transactionToggle.disabled = false; // Изменили элемент, чтобы учитывать кнопки-переключатели
    transactionSelect.disabled = false; // Добавили, чтобы учитывать выпадающий список
    if (selectedCountry === "default") {
        transactionToggle.disabled = true;
        transactionSelect.disabled = true;
        companySelect.disabled = true;
        greenBoxInfo.textContent = "";
        yellowBoxCompanyInfo.textContent = "";
        redBoxCompanyInfo.textContent = "";
    }
});

transactionToggle.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        const selectedCountry = countrySelect.value;
        const selectedTransaction = event.target.getAttribute("data-value"); // Получаем значение из атрибута data-value
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

transactionSelect.addEventListener("change", function () {
    const selectedCountry = countrySelect.value;
    const selectedTransaction = this.value;
    if (selectedCountry !== "default" && selectedTransaction !== "default") {
        const transactionInfo = companyInfo[selectedCountry][selectedTransaction][selectedCompany];
        greenBoxInfo.textContent = transactionInfo.greenBoxInfo;
        yellowBoxCompanyInfo.textContent = transactionInfo.yellowBoxInfo;
        redBoxCompanyInfo.textContent = transactionInfo.redBoxInfo;
    }
});
