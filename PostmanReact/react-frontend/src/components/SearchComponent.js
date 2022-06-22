import React from "react";
// import { Component } from "react";
// import Print from "./Print";
class SearchComponent extends React.Component{
    constructor(props){
        super(props);
        // this.input={
        //     id:"",
        // };
        this.state={
            id:"",
            // output:0.
        };
    }

    handleChange = (event) => {
        this.setState(
            {
                id : event.target.value,
            }
        )
        console.log(this.state.id);
    }

    handleSubmit = (e) => {
        // console.log("");
        e.preventDefault();
        // const ans = this.props.list.find( ({row}) => row.id === this.state.id)
        // console.log(this.props.list);
        // console.log(ans);
        
        for(let i=0;i<this.props.list.length;i++){
            if(this.props.list[i].movieId === parseInt(this.state.id)){
                // console.log(this.props.list[i])
                    // this.setState(
                    //     {
                    //         output : this.state.output.push(this.props.list[i]),
                    //     }
                    // )
                    this.props.func(this.props.list[i]);
                    
                    // this.props.func(this.state.output);
                // console.log(this.state.output);
                
            }
        }
        

        // console.log(this.props.list[i].movieId)}
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>  
                    <input type="text" value={this.state.id} onChange={this.handleChange} placeholder="Enter MovieId"></input>
                    <button type='submit'>Search</button>
                </form>
               
                {/* <h1>{this.state.output}</h1> */}
            </div>
        )
    }
}
export default SearchComponent;