import styles from '../style.module.css';
const Todo = () => {
    return(
        <div>
            <div className={styles.todoItem}>
                <h3 className={styles.todoName}>Todo Item</h3>
                <button className={styles.deleteButton}>Done</button>
            </div>
        </div>
    )
}
export default Todo;