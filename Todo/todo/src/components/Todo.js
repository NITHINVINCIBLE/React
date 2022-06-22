//  displays each item in todo with a button (done)

import styles from '../style.module.css';
const Todo = ({todoitem, todoList,setTodoList}) => {

    const deletetodo = () => {
        setTodoList(todoList.filter((item) => item.id!== todoitem.id));
        // todoList.filter((item) => item.id!== todoitem.id);---->updated list should be copied to original list
    }

    return (
        <div>
            <div className={styles.todoitem}>
                <h2 className={styles.todoname}>{todoitem.name}</h2>
                <button onClick={deletetodo} className={styles.deletebutton}>Done</button>
            </div>
        </div>
    )
}

export default Todo;