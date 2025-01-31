import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between py-4 px-8 bg-gradient-to-r from-teal-500 to-teal-800 container mx-auto rounded-lg shadow-lg">
      <ul className="flex justify-between items-center gap-[600px]">
        <Link
          to="/"
          className="bg-indigo-600 px-5 py-3 text-center text-sm font-semibold inline-block text-white uppercase rounded-md transition duration-200 ease-in-out hover:bg-indigo-700 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
        >
          ToDo
        </Link>
        <Link
          to="/crud"
          className="bg-indigo-600 px-5 py-3 text-center text-sm font-semibold inline-block text-white uppercase rounded-md transition duration-200 ease-in-out hover:bg-indigo-700 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
        >
          CRUD
        </Link>
        <Link
          to="/store"
          className="bg-indigo-600 px-5 py-3 text-center text-sm font-semibold inline-block text-white uppercase rounded-md transition duration-200 ease-in-out hover:bg-indigo-700 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
        >
          OnlineStore
        </Link>
      </ul>
    </div>
  );
};

export default Header;
