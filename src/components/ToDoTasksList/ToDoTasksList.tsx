import ToDoTask from "../ToDoTask/ToDoTask";
import styles from "./ToDoTasksList.module.css";

const ToDoTasksList = () => {
  return (
    <>
      <ul className={styles.tasks_list}>
        <ToDoTask />
      </ul>
    </>
  );
};

export default ToDoTasksList;
