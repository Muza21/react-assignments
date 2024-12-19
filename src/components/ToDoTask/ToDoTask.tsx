import styles from "./ToDoTask.module.css";

const ToDoTask = () => {
  return (
    <>
      <li className={styles.task}>
        <p>this is a task</p>
        <button>
          <img src="Trash.svg" alt="" />
        </button>
      </li>
    </>
  );
};

export default ToDoTask;
