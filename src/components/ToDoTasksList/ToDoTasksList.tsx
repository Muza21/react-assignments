import React from "react";
import { Task } from "../Main/Main";
import styles from "./ToDoTasksList.module.css";
import ToDoTask from "../ToDoTask/ToDoTask";

type ToDoTasksListProps = {
  tasks: Task[];
  removeTask: (id: number) => void;
};

const ToDoTasksList = (props: ToDoTasksListProps) => {
  const { tasks, removeTask } = props;

  return (
    <>
      <ul className={styles.tasks_list}>
        {tasks.map((task) => {
          return (
            <React.Fragment key={task.id}>
              <ToDoTask task={task} removeTask={removeTask} />
            </React.Fragment>
          );
        })}
      </ul>
      )
    </>
  );
};

export default ToDoTasksList;
