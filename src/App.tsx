import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList";
import Crud from "./pages/Crud";
import OnlineStore from "./pages/OnlineStore";
import MainLayout from "./layouts/MainLayout";

const App: FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/store" element={<OnlineStore />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
