import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const AddTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form
      onSubmit={AddTodoHandler}
      className="flex flex-row gap-4 justify-center items-center"
    >
      <input
        className="bg-gray-200 p-2 my-10 text-black w-72 rounded-lg"
        type="text"
        value={input}
        placeholder="Enter Your Todo..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
