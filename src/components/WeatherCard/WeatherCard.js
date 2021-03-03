import React from 'react';

import './WeatherCard.css';

export default function WeatherCard({city, temp, humidity, windSpeed, degree, weather}) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satureday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const newDate = new Date();
    const today = newDate.getDay();
    const todayDate = newDate.getDate();
    const month = newDate.getMonth();

    const direction = (degree) => {
        if (degree>337.5) return 'North';
        if (degree>292.5) return 'North West';
        if (degree>247.5) return 'West';
        if (degree>202.5) return 'South West';
        if (degree>157.5) return 'South';
        if (degree>122.5) return 'South East';
        if (degree>67.5) return 'East';
        if (degree>22.5){return 'North East';}
        return 'North';
    }

    return (
        <div className="card">
            <div className="card_header">
                <div className="day">{days[today]}</div>
                <div className="date">{todayDate} {months[month]}</div>
            </div>
            <div className="card_content">
                <div className="location">{city}</div>
                <div className="degree">
                    <div className="num">{Math.round(temp)} c</div>
                    <div className="weather_icon">
                        { weather === 'Thunderstorm' && <img src="/icons/icon-12.svg" alt="" />}
                        { weather === 'Drizzle' && <img src="/icons/icon-9.svg" alt="" />}
                        { weather === 'Rain' && <img src="/icons/icon-10.svg" alt="" />}
                        { weather === 'Snow' && <img src="/icons/icon-14.svg" alt="" />}
                        { weather === 'Haze' || weather === 'Mist' || weather === 'Smoke' || weather === 'Dust' || weather === 'Fog' && <img src="/icons/icon-8.svg" alt="" />}
                        { weather === 'Clear' && <img src="/icons/icon-2.svg" alt="" />}
                        { weather === 'Clouds' && <img src="/icons/icon-6.svg" alt="" />}
                    </div>
                </div>
                <div className="weather_info">
                    <div><img src="/icons/icon-umberella.png" alt="" /><div>{humidity}%</div></div>
                    <div><img src="/icons/icon-wind.png" alt="" /><div>{windSpeed} m/s</div></div>
                    <div><img src="/icons/icon-compass.png" alt="" /><div>{direction(degree)}</div></div>
                </div>
            </div>
        </div>
    )
}
