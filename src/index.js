import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }
    }
    componentDidMount(){
       this.timer =  setInterval(()=>this.startTimer(),1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    startTimer(){
        this.setState({
            date: new Date()
        })
    }
    render(){
        return <h2>Time is : {this.state.date.toLocaleTimeString()}</h2>
    }
}

    ReactDOM.render(
        <Clock/>,
        document.getElementById('root')
    );


