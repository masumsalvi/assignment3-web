import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BitcoinDetails.css';

const BitcoinDetails = () => {
  const [bitcoinData, setBitcoinData] = useState({});

  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        setBitcoinData(response.data.bpi);
      })
      .catch(error => {
        console.error('There was an error fetching the Bitcoin data:', error);
      });
  }, []);

  if (!bitcoinData.USD) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bitcoin-details">
      <h1>Bitcoin Details</h1>
      <div className="bitcoin-currency-detail">
        <h3>USD</h3>
        <p>Rate: {bitcoinData.USD.rate}</p>
        <p>Description: {bitcoinData.USD.description}</p>
      </div>
      <div className="bitcoin-currency-detail">
        <h3>GBP</h3>
        <p>Rate: {bitcoinData.GBP.rate}</p>
        <p>Description: {bitcoinData.GBP.description}</p>
      </div>
      <div className="bitcoin-currency-detail">
        <h3>EUR</h3>
        <p>Rate: {bitcoinData.EUR.rate}</p>
        <p>Description: {bitcoinData.EUR.description}</p>
      </div>
      <p className="bitcoin-tip">* The rate indicates the current value of one Bitcoin in the respective currency.</p>
    </div>
  );
}

export default BitcoinDetails;