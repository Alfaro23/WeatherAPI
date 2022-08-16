import {useEffect, useState} from "react";
import { ApiKey } from "../settings.js";

export const useForeCast = (coords) => {

    
    const [data, setData] = useState(null);
    console.log(coords);
    useEffect( () => {
        if(coords !== null){
            const {lat, lon} = coords;
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${ApiKey}&units=metric`)
            .then(res => res.json())
            .then(setData)
            .catch(error => {
                console.log(error)
            })
        }
        
    }, [coords] );

    return data;
}