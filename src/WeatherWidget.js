import axios from 'axios';
import { useState, useEffect } from 'react';

function WeatherWidget() {
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

    // Destructure weather data to obtain temperature, windspeed, and winddirection from the current_weather object
    const { temperature, windspeed, winddirection } = weatherData.current_weather;

    // Render the WeatherWidget component
    return (
        <div>
            <h1>Weather Data</h1>
            <p>Temperature: {temperature}</p>
            <p>Wind Speed: {windspeed}</p>
            <p>Wind Direction: {winddirection}</p>
            {/* You can display more data as needed */}
        </div>
    );
}

export default WeatherWidget;