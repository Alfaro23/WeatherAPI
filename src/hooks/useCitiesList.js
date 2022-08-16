import {useEffect, useReducer} from "react";

const initialState = {
    citiesList: JSON.parse(localStorage.getItem("citiesList")) || [],
    inputValue: "",
    editingCity: "",
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_CITY": {
            const newState = {...state, citiesList:[...state.citiesList, action.payload]};
            return newState;
        }
        case "DELETE_CITY":{
            const oldArr = state.citiesList;
            const newArr = oldArr.filter(el => el !== action.payload);
            return {...state, citiesList:newArr};
        }
        case "EDIT_CITY":{
            return {...state, inputValue: action.payload, editingCity: action.payload};
        }
        case "EDIT_CITY_DONE":{
            const {editingCity} = state;
            const oldArr = state.citiesList;
            const filteredArr = oldArr.filter(el => el !== editingCity);
            const newArr = [...filteredArr, action.payload];
            return {
                ...state, 
                citiesList: newArr, 
                inputValue: initialState.inputValue, 
                editingCity: initialState.editingCity
            };
        }
        case "CHANGE_INPUT_VALUE":{

            return {...state, inputValue: action.payload};
        }
        case "RESET_INPUT_VALUE":{

            return {...state, inputValue: initialState.inputValue};
        }
         
        default: 
            return initialState;
    }
}

export const useCitiesList = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const {citiesList} = state

    // const [citiesList, setCitiesList] = useState(JSON.parse(localStorage.getItem("citiesList")) || []);
  
    useEffect(() => {
        localStorage.setItem("citiesList", JSON.stringify(citiesList));
    }, [citiesList]);

    return [state, dispatch]
}