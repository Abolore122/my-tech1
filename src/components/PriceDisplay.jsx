import React from 'react';

const PriceDisplay = ({ data, type }) => {
  return (
    <div style={{ margin: '20px', border: '1px solid #ccc', padding: '20px' }}>
      <h3>{type === 'crypto' ? data.name : data.symbol}</h3>
      <p>Current Price: ${data.current_price || data.price}</p>
      <p>24-Hour Change: {data.price_change_percentage_24h || data.change}%</p>
      <p>Market Cap: ${data.market_cap || 'N/A'}</p>
      <p>Volume: ${data.total_volume || 'N/A'}</p>
      
    </div>
  );
};

export default PriceDisplay;
