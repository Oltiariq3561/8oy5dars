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
      <div className="w-[500px] container mx-auto mt-5 bg-slate-900 text-white rounded-xl text-center p-5">
        <h2 className="text-2xl font-serif font-bold mb-4">Todo List</h2>
        <form className="flex flex-col mb-5 gap-2">
          <input
            className="border font-mono p-2 rounded-md"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter ToDo..."
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 rounded-md cursor-pointer py-2 text-xl font-mono font-semibold"
          >
            Added
          </button>
        </form>

        <ul className="flex flex-col gap-4">
          {todos.length > 0 &&
            todos.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 border-b"
              >
                <span
                  onClick={() => dispatch(toggleTodo(todo.id))}
                  className={`cursor-pointer font-serif font-semibold text-xl w-[90%] text-start overflow-auto
                  ${todo.completed ? "line-through text-gray-500" : ""}
                  `}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="cursor-pointer"
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
