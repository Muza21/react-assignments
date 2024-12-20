import ToDoTasksList from "../ToDoTasksList/ToDoTasksList";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <>
      <main className={styles.main}>
        <form action="" className={styles.form}>
          <div>
            <input type="text" className={styles.input} />
            <button className={styles.button}>add task</button>
          </div>
        </form>
        <div className={styles.line}></div>
        <ToDoTasksList />
      </main>
    </>
  );
};

export default Main;
