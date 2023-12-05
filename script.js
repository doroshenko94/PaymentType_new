import { companyOptions, companyInfo } from './data.js';

const countrySelect = document.getElementById("countrySelect");
const companySelect = document.getElementById("companySelect");
const transactionToggle = document.getElementById("transactionToggle");

const greenBoxInfo = document.getElementById("greenBoxInfo");
const yellowBoxCompanyInfo = document.getElementById("yellowBoxCompanyInfo");
const redBoxCompanyInfo = document.getElementById("redBoxCompanyInfo");

countrySelect.addEventListener("change", function () {
    const selectedCountry = this.value;
    transactionToggle.disabled = false;
    companySelect.disabled = true;
    transactionToggle.innerHTML = "";

    if (selectedCountry === "default") {
        transactionToggle.disabled = true;
        companySelect.disabled = true;
        greenBoxInfo.textContent = "";
        yellowBoxCompanyInfo.textContent = "";
        redBoxCompanyInfo.textContent = "";
    } else if (companyInfo[selectedCountry]) {
        const transactionTypes = Object.keys(companyInfo[selectedCountry]);
        transactionTypes.forEach(function (type) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "btn btn-outline-success";
            button.setAttribute("data-value", type);
            button.textContent = type;
            transactionToggle.appendChild(button);
        });
    } else {
        transactionToggle.disabled = true;
        companySelect.disabled = true;
        greenBoxInfo.textContent = "Transaction types are not available for this country.";
        yellowBoxCompanyInfo.textContent = "";
        redBoxCompanyInfo.textContent = "";
    }
});

// Обработчик события выбора типа транзакции
transactionToggle.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        const buttons = this.querySelectorAll("button");
        buttons.forEach(function (button) {
            button.classList.remove("active");
        });

        event.target.classList.add("active");

        const selectedCountry = countrySelect.value;
        const selectedTransaction = event.target.getAttribute("data-value");
        companySelect.disabled = false;
        companySelect.innerHTML = "<option value='default'>Select the type of payment:</option>";

        if (selectedTransaction !== "default" && selectedCountry in companyOptions) {
            const companies = companyOptions[selectedCountry];

            companies.forEach(function (company) {
                if (companyInfo[selectedCountry][selectedTransaction][company]) {
                    const option = document.createElement("option");
                    option.value = company;
                    option.text = company;
                    companySelect.appendChild(option);
                }
            });
        }

        greenBoxInfo.textContent = "";
        yellowBoxCompanyInfo.textContent = "";
        redBoxCompanyInfo.textContent = "";
    }
});

// Обработчик события выбора компании
companySelect.addEventListener("change", function () {
    const selectedCountry = countrySelect.value;
    const selectedTransaction = transactionToggle.querySelector(".btn.btn-outline-success.active").getAttribute("data-value");
    const selectedCompany = this.value;

    if (selectedCountry !== "default" && selectedTransaction !== "default" && selectedCompany !== "default") {
        const transactionInfo = companyInfo[selectedCountry][selectedTransaction][selectedCompany];

        if (transactionInfo) {
            greenBoxInfo.textContent = transactionInfo.greenBoxInfo;
            yellowBoxCompanyInfo.textContent = transactionInfo.yellowBoxInfo;
            redBoxCompanyInfo.textContent = transactionInfo.redBoxInfo;

            const imagesForCompany = imagesData[selectedCompany];

            if (imagesForCompany) {
                displayImages(imagesForCompany);
            } else {
                const imageContainer = document.getElementById("paymentImages");
                imageContainer.innerHTML = "";
            }
        } else {
            greenBoxInfo.textContent = "";
            yellowBoxCompanyInfo.textContent = "";
            redBoxCompanyInfo.textContent = "";

            const imageContainer = document.getElementById("paymentImages");
            imageContainer.innerHTML = "";
        }
    } else {
        greenBoxInfo.textContent = "";
        yellowBoxCompanyInfo.textContent = "";
        redBoxCompanyInfo.textContent = "";

        const imageContainer = document.getElementById("paymentImages");
        imageContainer.innerHTML = "";
    }
});

const imagesData = {
    Coinjar: [
        "/Coinjar_Images/coinjar1.jpg",
        "/Coinjar_Images/coinjar2.jpg",
        "/Coinjar_Images/coinjar3.jpg",
        "/Coinjar_Images/coinjar4.jpg",
        // Добавьте пути к изображениям для каждой компании по аналогии
    ],
    // Добавьте изображения для каждой компании по аналогии
};

async function fetchCurrencyRates() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd");
        const data = await response.json();

        const btcPrice = data.bitcoin.usd;
        const ethPrice = data.ethereum.usd;
        const solPrice = data.solana.usd;

        document.getElementById("btcPrice").textContent = `BTC: $${btcPrice}`;
        document.getElementById("ethPrice").textContent = `ETH: $${ethPrice}`;
        document.getElementById("solPrice").textContent = `SOL: $${solPrice}`;
    } catch (error) {
        console.error("Error when receiving exchange rates: " + error);
    }
}

fetchCurrencyRates();

function displayImages(images) {
    const imageContainer = document.getElementById("paymentImages");
    imageContainer.innerHTML = "";

    images.forEach(function (imageUrl) {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.classList.add("payment-image");
        img.addEventListener("click", function () {
            const modal = document.getElementById("imageModal");
            const modalImg = document.getElementById("modalImage");
            modal.style.display = "block";
            modalImg.src = this.src;
        });
        imageContainer.appendChild(img);
    });
}

document.querySelector(".close").addEventListener("click", function () {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
});
