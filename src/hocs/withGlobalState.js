import {useContext} from "react";
import { themeContext } from "../App.js";

export const withGlobalState = Component => (props) => {

    const {state} = useContext(themeContext);
    return <Component {...{...props, state}}></Component>
}