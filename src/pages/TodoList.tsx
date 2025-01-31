import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addTodo, deleteTodo, toggleTodo } from "../store/todoSlice";

const TodoList: FC = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  function handleAdd(e: any) {
    e.preventDefault();
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  }

  return (
    <>
      <div className="w-[500px] container mx-auto mt-10 bg-gradient-to-r from-teal-500 to-teal-800 text-white rounded-3xl text-center p-6 shadow-lg">
        <h2 className="text-3xl font-serif font-bold mb-6">Todo List</h2>
        <form className="flex flex-col mb-6 gap-3">
          <input
            className="border-2 border-teal-600 rounded-lg p-3 w-full bg-teal-700 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your task..."
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 rounded-lg py-3 text-xl font-mono font-semibold transition-all duration-200 ease-in-out hover:bg-green-600"
          >
            Add Todo
          </button>
        </form>

        <ul className="flex flex-col gap-5">
          {todos.length > 0 &&
            todos.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 border-b border-teal-600 rounded-lg transition-all duration-300 hover:bg-teal-700"
              >
                <span
                  onClick={() => dispatch(toggleTodo(todo.id))}
                  className={`cursor-pointer font-serif font-semibold text-xl text-start w-[90%] overflow-auto transition-all duration-300 
                  ${todo.completed ? "line-through text-gray-500" : "text-white"}`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="cursor-pointer text-red-500 hover:text-red-600 transition-all duration-200"
                >
                  ❌
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
