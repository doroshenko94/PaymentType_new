// script.js

// Удаляем импорт!
// import { companyOptions, companyInfo } from './data.js';

const countrySelect = document.getElementById("countrySelect");
const companySelect = document.getElementById("companySelect");
const transactionToggle = document.getElementById("transactionToggle");

const greenBoxInfo = document.getElementById("greenBoxInfo");
const yellowBoxCompanyInfo = document.getElementById("yellowBoxCompanyInfo");
const redBoxCompanyInfo = document.getElementById("redBoxCompanyInfo");

// Определяем imagesData, pdfsData, textData и функции до их использования:

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
        ]
    },
    Coinjar: [
        "Coinjar_Images/coinjar1.jpg",
        "Coinjar_Images/coinjar2.jpg",
        "Coinjar_Images/coinjar3.jpg",
        "Coinjar_Images/coinjar4.jpg",
    ],
    First_direct_bank: [
        "First_direct_bank/1.jpg",
        "First_direct_bank/2.jpg",
        // ... и так далее, все ваши изображения ...
        "First_direct_bank/31.jpg",
    ],
    Newton: [
        "Newton_Images/1.png",
        "Newton_Images/2.png",
        "Newton_Images/3.png",
    ],
    GatePay: [
        "GatePay_Images/img.png",
        "GatePay_Images/img1.png",
    ],
    Safewirepay: [
        "Safewirepay_Images/1.png",
        "Safewirepay_Images/2.png",
        "Safewirepay_Images/3.png",
        "Safewirepay_Images/4.png",
        "Safewirepay_Images/5.png",
    ],
    NDAX: [
        "Ndax_Images/Ndax1.JPG",
        "Ndax_Images/Ndax2.JPG",
        "Ndax_Images/Ndax3.JPG",
        "Ndax_Images/Ndax4.JPG",
        "Ndax_Images/Ndax5.JPG",
        "Ndax_Images/Ndax6.JPG",
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
    ],
    Rampnetwork: [
        "Rampnetwork_Images/image.png",
    ],
    Easypayments : [
        "Easypayments_Images/1.png",
    ],
    Bybit : [
        "ByBit_Images/image.png",
    ],
    Ziglu : [
        "Ziglu_Images/image.png",
        "Ziglu_Images/image (1).png",
        "Ziglu_Images/image (2).png",
        "Ziglu_Images/image (3).png",
        "Ziglu_Images/image (4).png",
        "Ziglu_Images/image (5).png",
        "Ziglu_Images/image (6).png",
        "Ziglu_Images/image (7).png",
        "Ziglu_Images/image (8).png",
    ],
    Coingira : [
        "Coingira_Images/Coingira.png",
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
        "Xapo/image (10).png",
    ],
    BitGet: [
        "BitGet_Images/1.png",
        "BitGet_Images/2.png",
        "BitGet_Images/3.png",
        "BitGet_Images/4.png",
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
    ],
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
    );
});

const pdfsData = {
    Neteller: [
        "PDFs/Countries in which it does not work.pdf",
    ],
    Skrill: [
        "PDFs/Countries in which it does not work Skrill.pdf",
    ],
    Woltbit: [
        "PDFs/Woltbit Guide.pdf",
    ],
    Safewirepay: [
        "PDFs/Private person KYC form.pdf",
        "PDFs/Private person KYC form - EXAMPLE.pdf",
        "PDFs/Safewirepay step by step guide.pdf",
    ],
    Revolut: [
        "PDFs/Revolut.pdf",
    ],
    NDAX: [
        "PDFs/Interac Deposit Steps.pdf",
    ],
    CoinPAPA: [
        "PDFs/CoinPAPA questions for Video Call.pdf",
    ],
    Inserex: [
        "PDFs/Insirex step-by-step guide.pdf",
    ],
    GatePay: [
        "PDFs/Standard KYC GatePay.pdf",
    ],
    TapBank: [
        "PDFs/Tap Questionaire.pdf",
        "PDFs/Compliance SOW SOF Table.pdf",
    ],
    Paybis: [
        "PDFs/Paybis.pdf",
    ],
    AnyCoinDirect: [
        "PDFs/AnyCoinDirect Steps.pdf",
    ],
    Easypayments: [
        "PDFs/Easypayments.ca.pdf",
    ],
    The_Voucher: [
        "PDFs/TheVoucher.pdf",
    ],
    Sepa_Swift_Sortcode: [
        "PDFs/SEPA_SWIFT_SORTCODE.pdf",
    ],
    Coingira: [
        "PDFs/Coingira.pdf",
        "PDFs/Coingira Regular KYC List.pdf",
        "PDFs/Coingira Exception KYC List.pdf",
    ],
    Roobic: [
        "PDFs/Roobic Q&A.pdf",
    ],
};

const textData = {
    Simplex: "The only way to try these solutions - is to open WISE account personally...",
    Adv2: "The only way to try these solutions...",
    Advcash: "The only way to try these solutions...",
    Bit2me: "The only way to try these solutions...",
    Bestwallet: "The only way to try these solutions...",
    Skrill: "The only way to try these solutions...",
    Bybit: "The only way to try these solutions...",
    Paybis: "The only way to try these solutions...",
    MoonPay: "The only way to try these solutions...",
    Safewirepay: "<a href='https://safewirepay.com/'>Visit Safewirepay website</a>",
    The_Voucher: "<a href='https://uiservices.vouchers-shops.com/...'>Visit TheVoucher website</a>",
    // Добавьте другие тексты по аналогии
};

// Функции displayText, displayImages, displayPDFLinks

function displayText(text) {
    const textContainer = document.getElementById("textContainer");
    textContainer.innerHTML = text;
}

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
            modalImg.style.width = "auto";

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

function displayPDFLinks(pdfFiles) {
    const pdfContainer = document.getElementById("pdfFiles");
    pdfContainer.innerHTML = "";
    pdfFiles.forEach(function (pdfUrl) {
        const link = document.createElement("a");
        link.href = pdfUrl;
        const fileName = pdfUrl.split('/').pop();
        link.textContent = fileName;
        link.classList.add("btn", "btn-outline-danger", "mr-2", "mb-2");
        link.setAttribute("target", "_blank");

        pdfContainer.appendChild(link);
    });
}

// Обработчики событий

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

companySelect.addEventListener("change", function () {
    const selectedCountry = countrySelect.value;
    const activeButton = transactionToggle.querySelector(".btn.btn-outline-success.active");
    if(!activeButton) return;

    const selectedTransaction = activeButton.getAttribute("data-value");
    const selectedCompany = this.value;

    if (selectedCountry !== "default" && selectedTransaction !== "default" && selectedCompany !== "default") {
        const transactionInfo = companyInfo[selectedCountry][selectedTransaction][selectedCompany];

        if (transactionInfo) {
            greenBoxInfo.textContent = transactionInfo.greenBoxInfo || "";
            yellowBoxCompanyInfo.textContent = transactionInfo.yellowBoxInfo || "";
            redBoxCompanyInfo.textContent = transactionInfo.redBoxInfo || "";

            let imagesForCompany;
            if (imagesData[selectedCountry] && imagesData[selectedCountry][selectedCompany]) {
                imagesForCompany = imagesData[selectedCountry][selectedCompany];
            } else {
                imagesForCompany = imagesData[selectedCompany];
            }

            const pdfsForCompany = pdfsData[selectedCompany];
            const textForCompany = textData[selectedCompany];

            if (textForCompany) {
                displayText(textForCompany);
                const textContainer = document.getElementById("textContainer");
                textContainer.classList.remove("d-none");
                textContainer.classList.add("mt-3", "p-3", "bg-light");
                const paragraphElement = textContainer.querySelector("p");
                if (paragraphElement) {
                    paragraphElement.classList.add("text-warning");
                }
            } else {
                const textContainer = document.getElementById("textContainer");
                textContainer.textContent = "";
                textContainer.className = "d-none";
            }

            if (imagesForCompany) {
                displayImages(imagesForCompany);
            } else {
                const imageContainer = document.getElementById("paymentImages");
                imageContainer.innerHTML = "";
            }

            const pdfContainer = document.getElementById("pdfFiles");
            pdfContainer.innerHTML = "";

            if (pdfsForCompany) {
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

document.querySelector(".close").addEventListener("click", function () {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
});
