import { useState } from "react";
import ToDoTasksList from "../ToDoTasksList/ToDoTasksList";
import styles from "./Main.module.css";

export type Task = {
  body: string;
  id: number;
};

const Main = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [tasksList, setTasksList] = useState<Task[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput === "") return;
    const obj = {
      id: tasksList.length + 1,
      body: searchInput,
    };
    setTasksList((prevList: Task[]) => {
      return [obj, ...prevList];
    });
    setSearchInput("");
  };

  const removeTask = (id: number) => {
    setTasksList((prevList) => {
      return prevList.filter((task) => task.id !== id);
    });
  };

  return (
    <>
      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <input
              type="text"
              className={styles.input}
              value={searchInput}
              onChange={handleInputChange}
            />
            <button className={styles.button}>add task</button>
          </div>
        </form>
        <div className={styles.line}></div>
        <ToDoTasksList tasks={tasksList} removeTask={removeTask} />
      </main>
    </>
  );
};

export default Main;
