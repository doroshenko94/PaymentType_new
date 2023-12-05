// Функция для обновления изображений для компании Coinjar
export function updateCoinjarImages() {
    const imagesContainer = document.getElementById("greenBoxImages");
    imagesContainer.innerHTML = ""; // Очистим контейнер перед добавлением новых изображений

    // Допустим, у вас есть переменные с путями к изображениям для каждой компании:
    const coinjarImages = ["1.jpg", "2.jpg", "3.jpg"];

    coinjarImages.forEach((imagePath) => {
        const img = document.createElement("img");
        img.src = imagePath;
        img.alt = "Coinjar Image";
        imagesContainer.appendChild(img);
    });
}
