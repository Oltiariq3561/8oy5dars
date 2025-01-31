import { createSlice } from "@reduxjs/toolkit";

interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoStateType {
  todos: TodoType[];
}

const initialState: TodoStateType = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id == action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
