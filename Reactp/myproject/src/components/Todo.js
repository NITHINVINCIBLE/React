import { useState } from "react";
import Printlist from "./Printlist";
function Todo(){

    const [todo,setTodo]=useState("");
    const [todoList,setTodoList]=useState([]);

    const handleChange = (event) =>{
        setTodo(event.target.value);
        // console.log(todo);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        let temp=todoList;
        temp.push(todo);
        setTodoList(temp);
        console.log(todoList);

        // makes the text field empty when button is clicked
        setTodo("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Todo</h1>
                <input value={todo} onChange={handleChange} type="text" ></input>
                <button type="submit">Add</button>
            </form>
            {/* printing the todoList */}
            
            {todoList.map((x)=>(
            <Printlist key={x} name={x}></Printlist>))}
        </div>
    )
}
export default Todo;