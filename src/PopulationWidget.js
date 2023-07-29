import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PopulationWidget = () => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then(response => {
        setPopulationData(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the population data:', error);
      });
  }, []);

  return (
    <div>
      <h1>US Population Data</h1>
      {populationData.map(item => (
        <div key={item['ID Year']}>
          <h3>{item.Year}</h3>
          <p>Population: {item.Population.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default PopulationWidget;