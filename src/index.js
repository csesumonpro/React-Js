import React from "react";
import ReactDOM from "react-dom";
class FormField extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }
    handleChange = (e)=>{
        this.setState({
            value:e.target.value
        })
    }
    SubmitForm=(e)=>{
        e.preventDefault();
        console.log(this.state.value)
    }
    render(){
        return(
            <form onSubmit={this.SubmitForm}>
               <textarea value={this.state.value} onChange={this.handleChange} />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

ReactDOM.render(
    <FormField/>,
    document.getElementById('root')
)