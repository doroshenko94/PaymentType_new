import { companyOptions, companyInfo } from './data.js';

const countrySelect = document.getElementById("countrySelect");
const companySelect = document.getElementById("companySelect");
const transactionToggle = document.getElementById("transactionToggle");

const greenBoxInfo = document.getElementById("greenBoxInfo");
const yellowBoxCompanyInfo = document.getElementById("yellowBoxCompanyInfo");
const redBoxCompanyInfo = document.getElementById("redBoxCompanyInfo");

// Функция для отображения текста для каждой компании
function displayText(text) {
    const textContainer = document.getElementById("textContainer"); // Замените "textContainer" на ваш ID контейнера для текста
    textContainer.innerHTML = text;
}
// Добавим переменную textContainer
const textContainer = document.getElementById("textContainer");

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

           let imagesForCompany;

if (imagesData[selectedCountry] && imagesData[selectedCountry][selectedCompany]) {
    imagesForCompany = imagesData[selectedCountry][selectedCompany];
} else {
    imagesForCompany = imagesData[selectedCompany];
}
            const pdfsForCompany = pdfsData[selectedCompany]; // Добавлено для PDF файлов
            const textForCompany = textData[selectedCompany]; // Добавлено для текста

            if (textForCompany) {
                displayText(textForCompany);
                textContainer.innerHTML = textForCompany;
                textContainer.classList.add("mt-3", "p-3", "bg-light");
            
                const paragraphElement = textContainer.querySelector("p");
                if (paragraphElement) {
                    paragraphElement.classList.add("text-warning");
                }
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

const countriesWithCommonWiseImages = ['Canada','New_Zeland','Bermuda','Oman','Saudi_Arabia','Greenland','Sweeden', 'South_Africa'];

const imagesData = {
    Bahamas: {
        Wise: [
            "Wise_Images/image.png",
            "Wise_Images/image1.png",
            "Wise_Images/image2.png",
            "Wise_Images/image3.png",
            "Wise_Images/image4.jpg",
            "Wise_Images/image5.jpg",
            "Wise_Images/image6.jpg",
            // Добавьте пути к изображениям для каждой компании по аналогии
        ]
    },
    Coinjar: [
        "Coinjar_Images/coinjar1.jpg",
        "Coinjar_Images/coinjar2.jpg",
        "Coinjar_Images/coinjar3.jpg",
        "Coinjar_Images/coinjar4.jpg",
        // Добавьте пути к изображениям для каждой компании по аналогии
    ],
     First_direct_bank: [
        "First_direct_bank/1.jpg",
        "First_direct_bank/2.jpg",
        "First_direct_bank/3.jpg",
        "First_direct_bank/4.jpg",
        "First_direct_bank/5.jpg",
        "First_direct_bank/6.jpg",
        "First_direct_bank/7.jpg",
        "First_direct_bank/8.jpg",
        "First_direct_bank/9.jpg",
        "First_direct_bank/10.jpg",
        "First_direct_bank/11.jpg",
        "First_direct_bank/12.jpg",
        "First_direct_bank/13.jpg",
        "First_direct_bank/14.jpg",
        "First_direct_bank/15.jpg",
        "First_direct_bank/16.jpg",
        "First_direct_bank/17.jpg",
        "First_direct_bank/18.jpg",
        "First_direct_bank/19.jpg",
        "First_direct_bank/20.jpg",
        "First_direct_bank/21.jpg",
        "First_direct_bank/22.jpg",
        "First_direct_bank/23.jpg",
        "First_direct_bank/24.jpg",
        "First_direct_bank/25.jpg",
        "First_direct_bank/26.jpg",
        "First_direct_bank/27.jpg",
        "First_direct_bank/28.jpg",
        "First_direct_bank/29.jpg",
        "First_direct_bank/30.jpg",
        "First_direct_bank/31.jpg",
        // Добавьте пути к изображениям для каждой компании по аналогии
    ],
    Newton: [
        "Newton_Images/1.png",
        "Newton_Images/2.png",
        "Newton_Images/3.png",
        // Добавьте пути к изображениям для каждой компании по аналогии
    ],
    Safewirepay: [
        "Safewirepay_Images/1.png",
        "Safewirepay_Images/2.png",
        "Safewirepay_Images/3.png",
        "Safewirepay_Images/4.png",
        "Safewirepay_Images/5.png",
        // Добавьте пути к изображениям для каждой компании по аналогии
    ],
    NDAX: [
        "Ndax_Images/Ndax1.JPG",
        "Ndax_Images/Ndax2.JPG",
        "Ndax_Images/Ndax3.JPG",
        "Ndax_Images/Ndax4.JPG",
        "Ndax_Images/Ndax5.JPG",
        "Ndax_Images/Ndax6.JPG",
        // Добавьте пути к изображениям для каждой компании по аналогии
    ],
    Banxa: [
        "Banxa_Images/image.png",
        "Banxa_Images/image1.png",
        "Banxa_Images/image2.png",
        "Banxa_Images/image3.png",
        "Banxa_Images/image4.png",
        "Banxa_Images/image5.png",
        "Banxa_Images/image6.png",
        "Banxa_Images/image7.png",
        // Добавьте пути к изображениям для каждой компании по аналогии
    ],
    Rampnetwork: [
        "Rampnetwork_Images/image.png",
        // Добавьте пути к изображениям для каждой компании по аналогии
    ],
    Easypayments : [
        "Easypayments_Images/1.png",
        // Добавьте пути к изображениям для каждой компании по аналогии
    ],
     Bybit : [
        "ByBit_Images/image.png",
        // Добавьте пути к изображениям для каждой компании по аналогии
    ],
    Bybit : [
        "CashPlus_Images/image.png",
        // Добавьте пути к изображениям для каждой компании по аналогии
    ],
    Coingira : [
        "Coingira_Images/Coingira.png",
        // Добавьте пути к изображениям для каждой компании по аналогии
    ],
    Xapo : [
        "Xapo/image.png",
        "Xapo/image (1).png",
        "Xapo/image (2).png",
        "Xapo/image (3).png",
        "Xapo/image (4).png",
        "Xapo/image (5).png",
        "Xapo/image (6).png",
        "Xapo/image (7).png",
        "Xapo/image (8).png",
        "Xapo/image (9).png",
        // Добавьте пути к изображениям для каждой компании по аналогии
    ],
    BitGet: [
        "BitGet_Images/1.png",
        "BitGet_Images/2.png",
        "BitGet_Images/3.png",
        "BitGet_Images/4.png",
        // Добавьте пути к изображениям для каждой компании по аналогии
    ],
     Kraken: [
         "Kraken_Images/Kraken UK 1.png",
         "Kraken_Images/Kraken UK 2.png",
         "Kraken_Images/Kraken UK 3.png",
         "Kraken_Images/Kraken UK 4.png",
         "Kraken_Images/Kraken UK 5.png",
         "Kraken_Images/Kraken UK 6.png",
         "Kraken_Images/Kraken UK 7.png",
         "Kraken_Images/Kraken UK 8.png",
         "Kraken_Images/Kraken UK 9.png",
        // Добавьте пути к изображениям для каждой компании по аналогии
    ],
    // Добавьте изображения для каждой компании по аналогии
};

countriesWithCommonWiseImages.forEach(country => {
    if (!imagesData[country]) {
        imagesData[country] = {};
    }
    
    if (!imagesData[country].Wise) {
        imagesData[country].Wise = [];
    }

    imagesData[country].Wise.push(
        "WiseAll_Images/image.png",
        "WiseAll_Images/image1.png",
        "WiseAll_Images/image2.png",
        "WiseAll_Images/image3.png"
        // Добавьте пути к изображениям для каждой компании по аналогии
    );
});

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
     Safewirepay: [
        "PDFs/Private person KYC form.pdf",
         "PDFs/Private person KYC form - EXAMPLE.pdf",
         "PDFs/Safewirepay step by step guide.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
     Revolut: [
        "PDFs/Revolut.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
    NDAX: [
        "PDFs/Interac Deposit Steps.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
    CoinPAPA: [
        "PDFs/CoinPAPA questions for Video Call.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
    Inserex: [
        "PDFs/Insirex step-by-step guide.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
    TapBank: [
        "PDFs/Tap Questionaire.pdf",
        "PDFs/Compliance SOW SOF Table.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
    Paybis: [
        "PDFs/Paybis.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
    AnyCoinDirect: [
        "PDFs/AnyCoinDirect Steps.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
    Easypayments: [
        "PDFs/Easypayments.ca.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
     The_Voucher: [
        "PDFs/TheVoucher.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
    Sepa_Swift_Sortcode: [
        "PDFs/SEPA_SWIFT_SORTCODE.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
    Coingira: [
        "PDFs/Coingira.pdf",
        "PDFs/Coingira Regular KYC List.pdf",
        "PDFs/Coingira Exception KYC List.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
    Roobic: [
        "PDFs/Roobic Q&A.pdf",
        // Добавьте пути pdf файлам для каждой компании по аналогии
    ],
    // Добавьте pdf файлы для каждой компании по аналогии
};

// Добавление текста для каждой компании
const textData = {
    Simplex: "The only way to try these solutions - is to open WISE account personally, fund it in EUR and then use the virtual card on the payment solutions listed. ",
    Adv2: "The only way to try these solutions - is to open WISE account personally, fund it in EUR and then use the virtual card on the payment solutions listed. ",
    Advcash: "The only way to try these solutions - is to open WISE account personally, fund it in EUR and then use the virtual card on the payment solutions listed. ",
    Bit2me: "The only way to try these solutions - is to open WISE account personally, fund it in EUR and then use the virtual card on the payment solutions listed. ",
    Bestwallet: "The only way to try these solutions - is to open WISE account personally, fund it in EUR and then use the virtual card on the payment solutions listed. ",
    Skrill: "The only way to try these solutions - is to open WISE account personally, fund it in EUR and then use the virtual card on the payment solutions listed. ",
    Bybit: "The only way to try these solutions - is to open WISE account personally, fund it in EUR and then use the virtual card on the payment solutions listed. ",
    Paybis: "The only way to try these solutions - is to open WISE account personally, fund it in EUR and then use the virtual card on the payment solutions listed. ",
    MoonPay: "The only way to try these solutions - is to open WISE account personally, fund it in EUR and then use the virtual card on the payment solutions listed. ",
    Safewirepay: "<a href='https://safewirepay.com/'>Visit Safewirepay website</a>",
    The_Voucher: "<a href='https://uiservices.vouchers-shops.com/(S(3gpp3a1iy3vg2stjkzltg5vn))/public/voucher/Product.aspx?merchantId=9412929&Item=7&Order=&Brand=J24001&AIID=10&VoucherType=&HPP=K+qscHXoDyaqDml5t+akLH1XlOpgjcoP0xHXMX9KSYM='>Visit TheVoucher website</a>",
    // Добавьте текст для каждой компании по аналогии
};

document.querySelector(".close").addEventListener("click", function () {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
});
