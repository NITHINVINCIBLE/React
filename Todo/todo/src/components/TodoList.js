// displays the complete list of all the todo items
import Todo from "./Todo";

const TodoList = ({todoList,setTodoList}) => {
    return (
        <div>
            {todoList.map((todoitem) => 
                <Todo key={todoitem.id} todoitem={todoitem} todoList={todoList} setTodoList={setTodoList}/>
            )}
        </div>
    )
}
export default TodoList;