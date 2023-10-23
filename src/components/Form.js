import styles from '../style.module.css';
const Form = () => {
    return(
        <div className={styles.todoForm}>
            <form>
                <input placeholder="Add todo item" className={styles.todoInput}></input>
                <button>Add</button>
            </form>
        </div>
    )
}
export default Form;