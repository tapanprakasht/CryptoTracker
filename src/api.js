export default {
    async fetchCryptoCurrencyDetails() {
        try {
            let response = await fetch('https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=10');
            let jsonResponse = await response.json();
            return jsonResponse;
        } catch(error) {
            console.error(error);
        }
    }
}