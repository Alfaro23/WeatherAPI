import React, {useContext} from "react";
import "../../App.css";
import {Card} from "../Card/card.js";
import {withGlobalState} from "../../hocs/withGlobalState.js";

class Card_List_Nostate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orderBy: "asc",
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event){
        this.setState({
            orderBy: event.target.value,
        })
    }

    render(){

        const {orderBy} = this.state;
        const {citiesList} = this.props.state;

        let sortedCitiesList = citiesList.sort();
        if(orderBy === "desc"){
            sortedCitiesList.reverse();
        }

        return(
            <>
            <div class="main-select">
                <p class="main-select__text">Sort by:</p>
                <select value={orderBy} id="" className="main-select__select" onChange={this.handleOnChange}>
                    <option value="desc">By name desc</option>
                    <option value="asc">By name asc</option>
                </select>
            </div>
            
            <div className="main-info">
                {sortedCitiesList.map(item => <Card key={item} city={item}></Card>)}
            </div>
            </>
            
        )
    }
}

export const Card_List = withGlobalState(Card_List_Nostate);

// export const Card_List = () => {
//     const {state:{citiesList}} = useContext(themeContext);
//     return (
//         <div className="main-info">
//             {citiesList.map(item => <Card key={item} city={item}></Card>)}
//         </div>
//     );
// }