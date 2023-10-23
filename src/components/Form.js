import styles from '../style.module.css';
const Form = ({todo, setTodo, todoList, setTodoList}) => {
    const handleChange = (event) =>{
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, todo]);
    }
    return(
        <div className={styles.todoForm}>
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={handleChange} placeholder="Add todo item" className={styles.todoInput}></input>
                <button type="submit" className={styles.todoButton}>Add</button>
            </form>
        </div>
    )
}
export default Form;