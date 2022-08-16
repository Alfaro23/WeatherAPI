import React, {useRef, useContext} from "react";
import "../../App.css";
import {themeContext} from "../../App.js";

export const Input = () => {

    const inputRef = useRef(null);
    const {dispatch, state:{inputValue, editingCity}} = useContext(themeContext);

    const handleOnAdd = () => {
       
        dispatch({
            type: "ADD_CITY",
            payload: inputValue,
        })

        dispatch({
            type: "RESET_INPUT_VALUE",
        })
        inputRef.current.focus();
    }

    const handleOnDone = () => {
       
        dispatch({
            type: "EDIT_CITY_DONE",
            payload: inputValue,
        })

        dispatch({
            type: "RESET_INPUT_VALUE",
        })
        inputRef.current.focus();
    }

    const handleOnChange = (event) => {
        dispatch({
            type: "CHANGE_INPUT_VALUE",
            payload: event.target.value,
        })
    }

    return (
        <div className="main-input">
            <input type="text" className="main-input__input" placeholder="Enter city name" onChange={handleOnChange} value={inputValue} ref={inputRef}/>
            {
                editingCity ? <button className="main-input__button" onClick={handleOnDone}>Done</button> : <button className="main-input__button" onClick={handleOnAdd}>Add</button>
            }
        </div>
    );
}