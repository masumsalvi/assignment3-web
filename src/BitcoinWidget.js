import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BitcoinWidget.css';

const BitcoinWidget = () => {
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
        <div className="bitcoin-widget">
            <h1>Bitcoin Prices</h1>
            <div className="price">
                <p>USD: {bitcoinData.USD.rate}</p>
                <p>GBP: {bitcoinData.GBP.rate}</p>
                <p>EUR: {bitcoinData.EUR.rate}</p>
            </div>
        </div>
    );
}

export default BitcoinWidget;