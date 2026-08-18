import React from 'react';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
import HeaderNavBar from './HeaderNavBar';

const refresh = () => {
    window.location.reload();
}

const Weather = ({ weatherData }) => {
    return (
        <div className='weather-container'>
            <HeaderNavBar />
            <div className='main'>
                <div className='top'>
                    <div className="card-header">City Name: {weatherData.name}</div>
                    <Button className='button' inverted color='blue' circular icon='refresh' onClick={refresh}></Button>
                </div>
                <div className='flex-rows'>
                    <p className='day'>Day: {moment().format('dddd')}</p>
                    <p className='day'>Date: {moment().format('LL')}</p>
                </div>
                <div className='flex-rows'>
                    <p className='description'>Description: {weatherData.weather[0].main}</p>
                </div>
                <div className='flex-rows'>
                    <p className='temp'>Temperature: {weatherData.main.temp} &deg;C</p>
                    <p className='temp'>Humidity: {weatherData.main.humidity}</p>
                </div>
                <div className='flex-rows'>
                    <p className='sunrise-sunset'>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p className='sunrise-sunset'>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                </div>
            </div>
        </div>
    );
};

export default Weather;
