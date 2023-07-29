import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PopulationDetail.css';

const PopulationDetail = () => {
    const [populationData, setPopulationData] = useState([]);

    useEffect(() => {
        // Fetch population data from the API when the component mounts
        axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            .then(response => {
                // Update the populationData state with the response data
                setPopulationData(response.data.data);
            })
            .catch(error => {
                // Handle errors if there is an issue fetching the data
                console.error('There was an error fetching the population data:', error);
            });
    }, []);

    return (
        <div className="population-detail">
            <h2>US Population Data</h2>
            {/* Display population data for each year */}
            {populationData.map(item => (
                <div key={item['ID Year']} className="year-data">
                    <h3>{item.Year}</h3>
                    {/* Display population number with commas for better readability */}
                    <p>Population: {item.Population.toLocaleString()}</p>
                </div>
            ))}
            <div className="tips">
                <h3>What does this data mean?</h3>
                {/* Explanation of the data */}
                <p><strong>Year:</strong> The year for which the population data is applicable.</p>
                <p><strong>Population:</strong> The total population of the United States in that year.</p>
            </div>
        </div>
    );
}

export default PopulationDetail;