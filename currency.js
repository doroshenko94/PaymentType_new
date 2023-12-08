async function fetchCryptoData() {
    try {
      const response = await fetch('https://api.coincap.io/v2/assets?limit=10');
      const { data } = await response.json();
      let cryptoInfo = '';

      data.forEach((crypto, index) => {
        const price = parseFloat(crypto.priceUsd).toFixed(2);
        const changePercent24Hr = parseFloat(crypto.changePercent24Hr).toFixed(2);

        const priceDisplay = `$${price} USD`;

        let priceFormatted = priceDisplay;
        if (changePercent24Hr > 0) {
          priceFormatted = `<span class="green">${priceDisplay} &#8593;${changePercent24Hr}%</span>`;
        } else if (changePercent24Hr < 0) {
          priceFormatted = `<span class="red">${priceDisplay} &#8595;${changePercent24Hr}%</span>`;
        }

        cryptoInfo += `${index + 1}. ${crypto.name} (${crypto.symbol}): ${priceFormatted}`;

        if (index !== data.length - 1) {
          cryptoInfo += '<span class="separator">|</span>';
        }
      });

      document.getElementById('cryptoTicker').innerHTML = cryptoInfo;
    } catch (error) {
      console.error('Error fetching crypto data:', error);
    }
  }

  fetchCryptoData();

  setInterval(fetchCryptoData, 60000); // Обновление данных каждую минуту