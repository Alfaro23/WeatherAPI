import React, {memo, useContext, useEffect} from "react";
import {Link, useNavigate, useLocation} from "react-router-dom";
import "../../App.css";

import {useWeather} from "../../hooks/useWeather.js";
import {themeContext} from "../../App.js";

const Card_Nomemo = ({city, setCityCoord}) => {
    const data = useWeather(city);
    const {dispatch} = useContext(themeContext);

    const navigate = useNavigate();
    const {pathname} = useLocation("/");
    
    useEffect(() => {
        
        if(data && data.coord && setCityCoord){
            setCityCoord({
                lat: data.coord.lat,
                lon: data.coord.lon,
            });
        }
    }, [data, setCityCoord]);
    
    if(!data) return null;

    const {name, weather: [{description, icon}], main: {temp, humidity, feels_like}} = data;
    
    const handleButtonClose = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({
            type: "DELETE_CITY",
            payload: city,
        })
    }

    const handleButtonEdit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({
            type: "EDIT_CITY",
            payload: city,
        })
        navigate("/")
    }

    // const handleOnClick = (event) => {
    //     event.preventDefault();
    //     dispatch({
    //         type: "EDIT_CITY_DONE",
    //         payload: city,
        // }) //onClick={handleOnClick}
    // }

    if(pathname == "/"){
        return(
            <Link to={`/city/${city.toLowerCase()}`}  className="main-card">
                    
                <div className="main-header">
                    <div className="main-edit">
                        <button className="main-edit__text" onClick={handleButtonEdit}>Edit</button>
                    </div>
                    <div class="main-delete">
                        <button className="main-delete__close" onClick={handleButtonClose}>X</button>
                    </div>
                    
                </div>
                <div className="card-body">
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" className="card-body__img"/>
                    <p className="card-body__title card-body_text">{name}</p>
                    <div className="card-body__description card-body_text">{description}</div>
                    <p className="card-body__temperature card-body_text">{temp}</p>
                </div>
                <div className="card-footer">
                    <p className="card-footer__humidity card-body_text"> Humidity: {humidity}</p>
                    <p className="card-footer__feels card-body_text">Feels like: {feels_like}</p>
                </div>

            </Link>
        )
        
    } else{
        return (
            <div class="main-card">
            
                    <div className="main-header">
                        <div className="main-edit">
                            <button className="main-edit__text" onClick={handleButtonEdit}>Edit</button>
                        </div>
                        <div class="main-delete">
                            <button className="main-delete__close" onClick={handleButtonClose}>X</button>
                        </div>
                        
                    </div>
                    <div className="card-body">
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" className="card-body__img"/>
                        <p className="card-body__title card-body_text">{name}</p>
                        <div className="card-body__description card-body_text">{description}</div>
                        <p className="card-body__temperature card-body_text">{temp}</p>
                    </div>
                    <div className="card-footer">
                        <p className="card-footer__humidity card-body_text"> Humidity: {humidity}</p>
                        <p className="card-footer__feels card-body_text">Feels like: {feels_like}</p>
                    </div>
          
            </div>
        );
    }
    
}

export const Card = memo(Card_Nomemo)