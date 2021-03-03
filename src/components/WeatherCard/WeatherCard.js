import React from 'react';

import './WeatherCard.css';

export default function WeatherCard({temp}) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satureday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const newDate = new Date();
    const today = newDate.getDay();
    const todayDate = newDate.getDate();
    const month = newDate.getMonth();

    return (
        <div className="card">
            <div className="card_header">
                <div className="day">{days[today]}</div>
                <div className="date">{todayDate} {months[month]}</div>
            </div>
            <div className="card_content">
                <div className="location">Lahore</div>
                <div className="degree">
                    <div className="num">{temp} c</div>
                    <div className="weather_icon">
                        <img src="/icons/icon-1.svg" alt="" />
                    </div>
                </div>
                <div className="weather_info">
                    <div><img src="/icons/icon-umberella.png" alt="" /><div>20%</div></div>
                    <div><img src="/icons/icon-wind.png" alt="" /><div>18km/h</div></div>
                    <div><img src="/icons/icon-compass.png" alt="" /><div>East</div></div>
                </div>
            </div>
        </div>
    )
}
