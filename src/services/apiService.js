import axios from 'axios';

const BASE_CRYPTO_URL = 'https://api.coingecko.com/api/v3';
const BASE_STOCK_URL = 'https://www.alphavantage.co/query';
const ALPHA_VANTAGE_API_KEY = 'your-alpha-vantage-api-key'; // Replace with your API key.

export const fetchCryptoData = async (query) => {
  const response = await axios.get(`${BASE_CRYPTO_URL}/coins/markets`, {
    params: { vs_currency: 'usd', ids: query },
  });
  return response.data;
};

export const fetchStockData = async (symbol) => {
  const response = await axios.get(BASE_STOCK_URL, {
    params: {
      function: 'TIME_SERIES_DAILY',
      symbol,
      apikey: ALPHA_VANTAGE_API_KEY,
    },
  });
  return response.data;
};
