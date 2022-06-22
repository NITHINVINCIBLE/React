// class component and destructuring
import { Component } from "react";
class Message extends Component{
    render(){
        const {eid,ename} = this.props;
        return <h1> class component output | empid : {this.props.eid} | ename : {this.props.ename} | {eid} {ename} </h1>
    }
}

export default Message;