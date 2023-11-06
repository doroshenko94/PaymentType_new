import { companyOptions, companyInfo } from './data.js';

const countrySelect = document.getElementById("countrySelect");
const companySelect = document.getElementById("companySelect");
const transactionSelect = document.getElementById("transactionSelect");
const greenBoxInfo = document.getElementById("greenBoxInfo");
const yellowBoxCompanyInfo = document.getElementById("yellowBoxCompanyInfo");
const redBoxCompanyInfo = document.getElementById("redBoxCompanyInfo");

countrySelect.addEventListener("change", function () {
    const selectedCountry = this.value;
    transactionSelect.disabled = false;
    if (selectedCountry === "default") {
        transactionSelect.disabled = true;
        companySelect.disabled = true;
        transactionSelect.innerHTML = "<option value='default'>Select the type of transaction</option>";
        companySelect.innerHTML = "<option value='default'>Select the type of payment</option>";
        greenBoxInfo.textContent = "";
        yellowBoxCompanyInfo.textContent = "";
        redBoxCompanyInfo.textContent = "";
    }
});

transactionSelect.addEventListener("change", function () {
    const selectedCountry = countrySelect.value;
    const selectedTransaction = this.value;
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
});

companySelect.addEventListener("change", function () {
    const selectedCountry = countrySelect.value;
    const selectedCompany = this.value;
    const selectedTransaction = transactionSelect.value;
    if (selectedTransaction !== "default" && selectedCompany !== "default") {
        const transactionInfo = companyInfo[selectedCountry][selectedTransaction][selectedCompany];
        greenBoxInfo.textContent = transactionInfo.greenBoxInfo;
        yellowBoxCompanyInfo.textContent = transactionInfo.yellowBoxInfo;
        redBoxCompanyInfo.textContent = transactionInfo.redBoxInfo;
    }
});
