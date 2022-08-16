import React from "react";

import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import './App.css';

import {useCitiesList} from "./hooks/useCitiesList.js";
import {SingleCity} from "./components/Single_City/single_city.js";
import {Main} from "./components/Main/main.js";

export const themeContext = React.createContext();
 
function App() {

  const [state, dispatch] = useCitiesList()

  // const {citiesList, inputValue, editingCity}= state;

  return (
    <BrowserRouter>
      <themeContext.Provider value={{state, dispatch}}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="city/:city" element={<SingleCity />}></Route>
        </Routes>
        
      </themeContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;
