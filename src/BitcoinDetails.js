import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BitcoinDetails.css';

const BitcoinDetails = () => {
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

  // Render the Bitcoin details after the data is fetched
  return (
    <div className="bitcoin-details">
      <h1>Bitcoin Details</h1>
      {/* Display Bitcoin data for USD */}
      <div className="bitcoin-currency-detail">
        <h3>USD</h3>
        <p>Rate: {bitcoinData.USD.rate}</p>
        <p>Description: {bitcoinData.USD.description}</p>
      </div>
      {/* Display Bitcoin data for GBP */}
      <div className="bitcoin-currency-detail">
        <h3>GBP</h3>
        <p>Rate: {bitcoinData.GBP.rate}</p>
        <p>Description: {bitcoinData.GBP.description}</p>
      </div>
      {/* Display Bitcoin data for EUR */}
      <div className="bitcoin-currency-detail">
        <h3>EUR</h3>
        <p>Rate: {bitcoinData.EUR.rate}</p>
        <p>Description: {bitcoinData.EUR.description}</p>
      </div>
      {/* Disclaimer */}
      <p className="bitcoin-tip">* The rate indicates the current value of one Bitcoin in the respective currency.</p>
    </div>
  );
}

export default BitcoinDetails;