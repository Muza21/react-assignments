import { useContext } from "react";
import { Task } from "../Main/Main";
import styles from "./ToDoTask.module.css";
import TaskContext from "../../Store/TaskContext/TaskContext";

type ToDoTaskProps = {
  task: Task;
};

const ToDoTask = (props: ToDoTaskProps) => {
  const { task } = props;
  const { removeTask } = useContext(TaskContext);
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
