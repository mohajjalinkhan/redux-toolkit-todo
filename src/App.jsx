import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-blue-400 font-bold">Redux ToolKit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
