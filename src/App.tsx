import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { TasksContextProvider } from "./Store/TaskContext/TaskContext";

function App() {
  return (
    <>
      <TasksContextProvider>
        <Header />
        <Main />
      </TasksContextProvider>
    </>
  );
}

export default App;
