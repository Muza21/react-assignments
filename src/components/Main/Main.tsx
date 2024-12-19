import ToDoTasksList from "../ToDoTasksList/ToDoTasksList";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <>
      <main className={styles.main}>
        <form action="">
          <input type="text" />
          <button>add task</button>
        </form>
        <span></span>
        <ToDoTasksList />
      </main>
    </>
  );
};

export default Main;
