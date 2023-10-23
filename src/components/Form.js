import styles from '../style.module.css';
const Form = ({todo, setTodo, todoList, setTodoList}) => {
    return(
        <div className={styles.todoForm}>
            <form>
                <input value={todo} placeholder="Add todo item" className={styles.todoInput}></input>
                <button className={styles.todoButton}>Add</button>
            </form>
        </div>
    )
}
export default Form;