import React from "react";

import {Input} from "../Input/input.js";
import {Card_List} from "../Card_List/card_list.js";
import {ErrorBoundary} from "../ErrorBoundary/ErrorBoundary.js";

export const Main = () => {
    
    return (
        <div className="main">
            <Input></Input>
            <ErrorBoundary>
                <Card_List></Card_List>
            </ErrorBoundary>
        </div>
    );
}