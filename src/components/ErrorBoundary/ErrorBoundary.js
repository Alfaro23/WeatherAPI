import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {error: null};
    }
    componentDidCatch(error, errorInfo){
        this.setState({error})
    }
    render(){
        if(this.state.error){
            localStorage.clear();
            return <div className="main-error">Component has crashed, please refresh the page</div>
        }
        return this.props.children;
    }
}