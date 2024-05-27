document.addEventListener('DOMContentLoaded', function () {
    // Fetch Bitcoin price using Promise
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    };

    // Display Bitcoin price
    const displayPrice = (data) => {
        const price = document.getElementById('price');
        price.classList.add('list-group-item');
        price.textContent = `
            Rate: ${data.bpi.USD.rate}, 
            Code: ${data.bpi.USD.code},
            Symbols: ${data.bpi.USD.symbol},
            Rate Float: ${data.bpi.USD.rate_float}
            `;

        const price1 = document.getElementById('price1');
        price1.classList.add('list-group-item');  
        price1.textContent = `
            Rate: ${data.bpi.EUR.rate}, 
            Code: ${data.bpi.EUR.code},
            Symbols: ${data.bpi.EUR.symbol},
            Rate Float: ${data.bpi.EUR.rate_float}
            `;

        const price2 = document.getElementById('price2');
        price2.classList.add('list-group-item');  
        price2.textContent = `
            Rate: ${data.bpi.GBP.rate}, 
            Code: ${data.bpi.GBP.code},
            Symbols: ${data.bpi.GBP.symbol},
            Rate Float: ${data.bpi.GBP.rate_float}
            `;

        const time = document.getElementById('time');
        time.classList.add('list-group-item');  
        time.textContent = `
                Updated: ${data.time.updated}, 
                UpdatedISO: ${data.time.updatedISO},
                Updateduk: ${data.time.updateduk}
                `;

            price.appendChild(price);
            price1.appendChild(price1);
            price2.appendChild(price2);
            time.appendChild(time);


    };

    // Fetch data and display price
    fetchData()
        .then(data => displayPrice(data))
        .catch(error => console.error('Error fetching data:', error));
});