import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BitcoinWidget = () => {
  const [bitcoinData, setBitcoinData] = useState({});

  useEffect(() => {
    // Fetch Bitcoin data from the API using axios when the component mounts
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        // Update the bitcoinData state with the fetched data
        setBitcoinData(response.data.bpi);
      })
      .catch(error => {
        // Log an error message if there's an issue fetching the data
        console.error('There was an error fetching the Bitcoin data:', error);
      });
  }, []);

  // Display "Loading..." until bitcoinData is fetched and available
  if (!bitcoinData.USD) {
    return <div>Loading...</div>;
  }

  // Render the Bitcoin prices after the data is fetched
  return (
    <div>
      <h1>Bitcoin Prices</h1>
      {/* Display Bitcoin prices for USD, GBP, and EUR */}
      <div>
        <p>USD: {bitcoinData.USD.rate}</p>
        <p>GBP: {bitcoinData.GBP.rate}</p>
        <p>EUR: {bitcoinData.EUR.rate}</p>
      </div>
    </div>
  );
}

export default BitcoinWidget;