import { useContext, useState } from "react";
import ToDoTasksList from "../ToDoTasksList/ToDoTasksList";
import styles from "./Main.module.css";
import TaskContext from "../../Store/TaskContext/TaskContext";

export type Task = {
  body: string;
  id: number;
};

const Main = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const { tasksList, updateTasksList } = useContext(TaskContext);

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
    updateTasksList(obj);
    setSearchInput("");
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
        <ToDoTasksList />
      </main>
    </>
  );
};

export default Main;
