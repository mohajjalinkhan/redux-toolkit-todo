import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <div className="w-96 h-screen m-10 flex flex-col gap-8 items-center">
      <div className="text-3xl font-semibold ">TODOS</div>
      {todos.map((item) => (
        <div
          key={item.id}
          className="border border-gray-300 p-4 flex justify-between w-auto rounded-xl items-center"
        >
          {item.text}
          <button
            className="bg-red-500 text-white ml-6"
            onClick={() => dispatch(removeTodo(item.id))}
          >
            Delete
          </button>
        </div>
      ))}

      {/* <ul>
        {todos.map((item) => {
          <li key={item.id}>
            <div> {item.text}</div>
            <button onClick={() => dispatch(removeTodo(item.id))}>
              XDelete
            </button>
          </li>;
        })}
      </ul> */}
    </div>
  );
};

export default Todos;
