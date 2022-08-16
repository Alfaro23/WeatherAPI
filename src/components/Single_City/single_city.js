import React, {useState} from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import {Card} from "../Card/card.js";
import {useForeCast} from "../../hooks/useForeCast.js";
import {DailyCard} from "../DailyCard/dailyCard.js";


export const SingleCity = () => {
    const [cityCoord, setCityCoord] = useState(null);
    
    const data = useForeCast(cityCoord);
    const {city} = useParams();
    const navigate = useNavigate();
    
    return (
        <div className="main-wrap">
            <button className="main-wrap__back" onClick={()=>{navigate("/")}}>Back</button>
            <Card city={city} setCityCoord={setCityCoord}/>
            {data && 
                <div className="daily-cards"> 
                    {data.daily.map(dailyCard => <DailyCard dailyCard={dailyCard} key={dailyCard.dt}/>)}
                </div>
            }
        
        </div>
    );
}
