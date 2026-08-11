// src/components/Weather.jsx
import React, { useState, useEffect } from 'react';
import { API_KEY, BASE_URL } from '../config';

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const url = `${BASE_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
            const res = await fetch(url);
            const data = await res.json();
            setWeather(data);
        });
    }, []);


    const fetchWeather = async (e) => {
        e.preventDefault();
        if (!city.trim()) return;

        setLoading(true);
        setError(null);
        setWeather(null);

        try {
            // metric units provide Celsius. Use 'imperial' for Fahrenheit.
            const response = await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);

            if (!response.ok) {
                throw new Error('City not found. Please try again.');
            }

            const data = await response.json();
            setWeather(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial' }}>
            <h2>React Weather App</h2>

            <form onSubmit={fetchWeather}>
                <input
                    type="text"
                    placeholder="Enter city name..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{ padding: '8px', width: '70%', marginRight: '5px' }}
                />
                <button type="submit" style={{ padding: '8px 12px' }}>Search</button>
            </form>

            {loading && <p>Loading data...</p>}

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {weather && (
                <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px' }}>
                    <h3>{weather.name}, {weather.sys.country}</h3>
                    <p>Temperature: <strong>{weather.main.temp}°C</strong></p>
                    <p>Condition: {weather.weather[0].description}</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Wind Speed: {weather.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
