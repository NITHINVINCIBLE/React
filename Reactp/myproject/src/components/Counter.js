// state in class component and event handling and event binding

import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter: 0,
        };
        // this.increment=this.increment.bind(this); --->event binding
    }

    increment(){
        this.setState({
            counter: this.state.counter +1,
        });
    }
    decrement(){
        this.setState({
            counter: this.state.counter - 1,
        });
    }
    render(){
        return (
        <div>
            <h1>The Counter value : {this.state.counter}</h1>
            <button onClick={() => this.increment()}>Increase</button>
            
            <button onClick={() => this.decrement()}>Decrease</button>
        </div>
        )
    }
}

export default Counter;