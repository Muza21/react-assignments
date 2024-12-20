import { Task } from "../Main/Main";
import styles from "./ToDoTask.module.css";

type ToDoTaskProps = {
  task: Task;
  removeTask: (id: number) => void;
};

const ToDoTask = (props: ToDoTaskProps) => {
  const { task, removeTask } = props;
  return (
    <>
      <li className={styles.task}>
        <p>{task.body}</p>
        <button onClick={() => removeTask(task.id)}>
          <img src="Trash.svg" alt="" />
        </button>
      </li>
    </>
  );
};

export default ToDoTask;
