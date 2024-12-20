import { createContext, ReactNode, useCallback, useState } from "react";
import { Task } from "../../components/Main/Main";

type TasksContextValues = {
  tasksList: Task[];
  removeTask: (id: number) => void;
  updateTasksList: (obj: Task) => void;
};

const TaskContext = createContext<TasksContextValues>({
  tasksList: [],
  removeTask: () => {},
  updateTasksList: () => {},
});

type TasksContextProviderProps = {
  children: ReactNode;
};

export const TasksContextProvider = (props: TasksContextProviderProps) => {
  const { children } = props;
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const removeTask = useCallback((id: number) => {
    setTasksList((prevList) => {
      return prevList.filter((task) => task.id !== id);
    });
  }, []);

  const updateTasksList = useCallback((obj: Task) => {
    setTasksList((prevList: Task[]) => {
      return [obj, ...prevList];
    });
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasksList: tasksList,
        removeTask,
        updateTasksList,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
