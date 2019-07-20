import React from "react";
import ReactDOM from "react-dom";

function CustomMessage (props) {
    if(props.value){
        return <h2>This is first message</h2>
    }
    return <h2>This is second Message</h2>
}

class Btn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:true
        }
    }
    changeMessage = (e)=>{
        this.setState({
            value:!this.state.value
        })
    }
    render(){
     return(
        <div>
            <button onClick={this.changeMessage}> Change Message</button>
            <CustomMessage value={this.state.value}/>
         </div>
     )      
    }
}
ReactDOM.render(
    <Btn/>,
    document.getElementById('root')
)