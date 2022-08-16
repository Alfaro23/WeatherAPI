import React from "react";
import "../../App.css";

export const DailyCard = ({dailyCard}) => {
    
    const {dt, weather: [{main, icon}], temp:{day}} = dailyCard;
    const date = new Date(dt * 1000);

    return (
        <div className="day-card">
            <div className="day-day">{date.toString().split(" ")[0]}</div>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" className="card-body__img"/>
            <div className="day-temp">{day}</div>
            <div className="day-main">{main}</div>
        </div>
        
    );
}