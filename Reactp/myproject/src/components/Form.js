import { Component } from "react";

class Form extends Component{
    state={
        firstname : "",
    }

    handleChange = (event) => {
        this.setState({
            firstname : event.target.value,
        })

        // console.log(this.state.firstname);   
    }

    handleSubmit = (event) =>{

        // it prevents reloading of the page when submit button is clicked
        event.preventDefault();
        // console.log(
        //     {
        //         fname:this.state.firstname,
        //     }
        // )
        console.log(this.state.firstname);
    }

    render() {
        return (
            <div>Form
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange}  type="text" value={this.state.firstname}></input>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        );
    }
}
export default Form;