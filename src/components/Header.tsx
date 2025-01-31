import { FC } from "react";
import { Link } from "react-router-dom";
import home from "./home.svg";
const Header: FC = () => {
  return (
    <div className="flex items-center justify-between py-3 px-5 bg-slate-200 container mx-auto">
      <Link to="/">
        <img src={home} className="w-[40px] h-[40px]" alt="" />
      </Link>
      <ul className="flex items-center gap-10">
        <Link
          to="/"
          className="bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
        >
          ToDo
        </Link>
        <Link
          to="/crud"
          className="bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
        >
          CRUD
        </Link>
        <Link
          to="/store"
          className="bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
        >
          OnlineStore
        </Link>
      </ul>
      <h1 className="text-2xl font-bold text-gray-800 font-mono">Pages</h1>
    </div>
  );
};

export default Header;
