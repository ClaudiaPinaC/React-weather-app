import React, { useEffect, useState } from 'react';
import './App.css';
import bgImage from './assets/pexels-sky.jpg';
import Weather from './components/Weather';
import { Dimmer, Loader } from 'semantic-ui-react';

const App = () => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    const bgStyle = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
    };

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result);
                });
        }
        fetchData();
    }, [lat, long]);

    return (
        <div className="app" style={bgStyle}>
            {(typeof data.main != 'undefined') ? (
                <Weather weatherData={data} />
            ) : (
                <div>
                    <Dimmer active>
                        <Loader>Loading...</Loader>
                    </Dimmer>
                </div>
            )}
        </div>
    );
};

export default App;