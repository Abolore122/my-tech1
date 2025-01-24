import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import PriceDisplay from './components/PriceDisplay';
import PriceChart from './components/PriceChart';
import { fetchCryptoData, fetchStockData } from './services/apiService';
import './styles/global.css';

function App() {
  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setDarkMode(savedTheme === 'dark');
    document.body.className = savedTheme;
  }, []);

  const handleSearch = async (query) => {
    try {
      const cryptoData = await fetchCryptoData(query);
      if (cryptoData.length > 0) {
        setData(cryptoData[0]);
        setChartData(cryptoData[0].sparkline_in_7d.price.map((price, index) => ({
          date: `Day ${index + 1}`,
          price,
        })));
      } else {
        const stockData = await fetchStockData(query);
        console.log(stockData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleDarkMode = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Olan Dashboard</h1>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          <label className="toggle-switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider"></span>
          </label>
          <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
        </div>
      </header>
      <SearchBar onSearch={handleSearch} />
      {data && <PriceDisplay data={data} type="crypto" />}
      {chartData.length > 0 && <PriceChart data={chartData} />}
    </div>
  );
}

export default App;
