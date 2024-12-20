import React, { useContext } from "react";
import styles from "./ToDoTasksList.module.css";
import ToDoTask from "../ToDoTask/ToDoTask";
import TaskContext from "../../Store/TaskContext/TaskContext";

const ToDoTasksList = () => {
  const { tasksList } = useContext(TaskContext);
  return (
    <>
      <ul className={styles.tasks_list}>
        {tasksList.map((task) => {
          return (
            <React.Fragment key={task.id}>
              <ToDoTask task={task} />
            </React.Fragment>
          );
        })}
      </ul>
      )
    </>
  );
};

export default ToDoTasksList;
