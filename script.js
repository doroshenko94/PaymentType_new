import { companyOptions, companyInfo } from './data.js';

const countrySelect = document.getElementById("countrySelect");
const companySelect = document.getElementById("companySelect");
const transactionToggle = document.getElementById("transactionToggle");

const greenBoxInfo = document.getElementById("greenBoxInfo");
const yellowBoxCompanyInfo = document.getElementById("yellowBoxCompanyInfo");
const redBoxCompanyInfo = document.getElementById("redBoxCompanyInfo");

// Добавление текста для каждой компании
const textData = {
    Simplex: "Текст для компании Coinjar. Можно использовать HTML-разметку для стилизации или форматирования текста.",
    Adv2: "Текст для компании Coinjar. Можно использовать HTML-разметку для стилизации или форматирования текста.",
    // Добавьте текст для каждой компании по аналогии
};

// Функция для отображения текста для каждой компании
function displayText(text) {
    const textContainer = document.getElementById("textContainer"); // Замените "textContainer" на ваш ID контейнера для текста
    textContainer.textContent = text;
}

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

// Обработчик события для выбора типа транзакции
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


// Код до обработчика событий для выбора компании...
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
            const pdfsForCompany = pdfsData[selectedCompany]; // Добавлено для PDF файлов
            const textForCompany = textData[selectedCompany]; // Добавлено для текста

            if (textForCompany) {
                displayText(textForCompany);
                textContainer.classList.add("mt-3", "p-3", "bg-light");
                textContainer.querySelector("h4").classList.add("text-info");
                textContainer.querySelector("p").classList.add("text-muted");
            } else {
                textContainer.textContent = "";
                textContainer.className = "d-none"; // Скрываем элемент, если нет текста
            }

            
            if (imagesForCompany) {
                displayImages(imagesForCompany);
            } else {
                const imageContainer = document.getElementById("paymentImages");
                imageContainer.innerHTML = "";
            }

            const pdfContainer = document.getElementById("pdfFiles");
            pdfContainer.innerHTML = ""; // Очищаем контейнер перед добавлением новых ссылок

            if (pdfsForCompany) { // Отображение PDF ссылок, если они есть
                displayPDFLinks(pdfsForCompany);
            }
        } else {
            greenBoxInfo.textContent = "";
            yellowBoxCompanyInfo.textContent = "";
            redBoxCompanyInfo.textContent = "";

            const imageContainer = document.getElementById("paymentImages");
            imageContainer.innerHTML = "";

            const pdfContainer = document.getElementById("pdfFiles");
            pdfContainer.innerHTML = "";
        }
    } else {
        greenBoxInfo.textContent = "";
        yellowBoxCompanyInfo.textContent = "";
        redBoxCompanyInfo.textContent = "";

        const imageContainer = document.getElementById("paymentImages");
        imageContainer.innerHTML = "";

        const pdfContainer = document.getElementById("pdfFiles");
        pdfContainer.innerHTML = "";
    }
});

// Код после обработчика событий для выбора компании...


const imagesData = {
    Coinjar: [
        "Coinjar_Images/coinjar1.jpg",
        "Coinjar_Images/coinjar2.jpg",
        "Coinjar_Images/coinjar3.jpg",
        "Coinjar_Images/coinjar4.jpg",
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
            const modalClose = document.querySelector(".close");
            const imagesCount = images.length;
            let currentIndex = images.indexOf(imageUrl);

            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.style.width = "auto"; // Адаптивный размер

            modalClose.onclick = function () {
                modal.style.display = "none";
            };

            modalImg.onclick = function () {
                currentIndex = (currentIndex + 1) % imagesCount;
                modalImg.src = images[currentIndex];
            };
        });
        imageContainer.appendChild(img);
    });
}

// Функция для отображения ссылок на PDF-файлы
function displayPDFLinks(pdfFiles) {
    const pdfContainer = document.getElementById("pdfFiles");
    if (!pdfContainer) {
        console.error("PDF Container not found");
        return;
    }

    pdfFiles.forEach(function (pdfUrl) {
        const link = document.createElement("a");
        link.href = pdfUrl;
        const fileName = pdfUrl.split('/').pop(); // Получаем имя файла из URL
        link.textContent = fileName; // Используем имя файла как текст ссылки
        link.classList.add("btn", "btn-outline-danger", "mr-2", "mb-2");
        link.setAttribute("target", "_blank");

        pdfContainer.appendChild(link);
    });
}



// Обработчик события для выбора компании
companySelect.addEventListener("change", function () {
    // Остальной ваш код для получения информации о компании и т.д.

    const pdfsForCompany = pdfsData[selectedCompany];

    if (pdfsForCompany) {
        displayPDFLinks(pdfsForCompany);
    } else {
        const pdfContainer = document.getElementById("pdfFiles");
        pdfContainer.innerHTML = "";
    }
});

// Массив данных для pdf файлоы
const pdfsData = {
    Neteller: [
        "PDFs/Countries in which it does not work.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
     Skrill: [
        "PDFs/Countries in which it does not work Skrill.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
    Woltbit: [
        "PDFs/Woltbit Guide.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
    // Добавьте pdf файлы для каждой компании по аналогии
};

document.querySelector(".close").addEventListener("click", function () {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
});
