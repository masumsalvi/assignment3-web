import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherPage.css';

function WeatherPage() {
    // State variable to store weather data obtained from the API
    const [weatherData, setWeatherData] = useState(null);

    // useEffect hook to fetch weather data from the API when the component mounts
    useEffect(() => {
        axios.get('https://api.open-meteo.com/v1/forecast?latitude=44.4097177&longitude=-79.6614369&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
            .then(response => {
                // Set the weatherData state variable with the API response data
                setWeatherData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the weather data:', error);
            });
    }, []);

    // Display "Loading..." if weatherData is null (i.e., data is still being fetched)
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    // Destructure weather data to obtain temperature, windspeed, and winddirection
    const { temperature, windspeed, winddirection } = weatherData.current_weather;

    // Render the WeatherPage component
    return (
        <div className="weather-page">
            <h1>Weather Details</h1>
            <div className="weather-detail">
                <p><b>Temperature:</b> {temperature} °C</p>
                <p><b>Wind Speed:</b> {windspeed} km/h</p>
                <p><b>Wind Direction:</b> {winddirection} degrees</p>
            </div>
            <p className="weather-tip">Tip: Wind direction is measured in "meteorological degrees".</p>
        </div>
    );
}

export default WeatherPage;