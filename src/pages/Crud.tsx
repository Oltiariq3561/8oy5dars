import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addUser, updateUser, deleteUser } from "../store/userSlice";

interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

const Crud: FC = () => {
  const [user, setUser] = useState<UserType>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
  });

  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch();

  function handleAdd(e: any) {
    e.preventDefault();
    if (user.firstName && user.lastName && user.email && user.age) {
      dispatch(addUser({ ...user, id: Date.now() }));
      setUser({ id: 0, firstName: "", lastName: "", email: "", age: 0 });
    }
  }

  function handleUpdate(id: number): void {
    const updatedUser: UserType = { ...user, id };
    dispatch(updateUser(updatedUser));
    setUser({ id: 0, firstName: "", lastName: "", email: "", age: 0 });
  }

  function handleDelete(id: number) {
    dispatch(deleteUser(id));
  }

  return (
    <div className="container mx-auto w-[700px] bg-gradient-to-r from-teal-500 to-teal-800 text-white p-8 mt-5 rounded-lg shadow-2xl">
      <h2 className="text-3xl mb-6 font-bold font-serif text-center">CRUD Application</h2>
      <form className="flex flex-col gap-6 items-center">
        <input
          className="border-2 border-teal-600 rounded-lg p-4 w-full bg-teal-700 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
          placeholder="Enter first name..."
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <input
          className="border-2 border-teal-600 rounded-lg p-4 w-full bg-teal-700 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
          placeholder="Enter last name..."
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <input
          className="border-2 border-teal-600 rounded-lg p-4 w-full bg-teal-700 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
          placeholder="Enter email..."
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          className="border-2 border-teal-600 rounded-lg p-4 w-full bg-teal-700 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
          type="number"
          placeholder="Enter age..."
          value={user.age}
          onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
        />
        <button
          onClick={handleAdd}
          className="bg-teal-600 hover:bg-teal-700 text-white w-full py-3 rounded-lg transition duration-300"
        >
          Add User
        </button>
      </form>

      <ul className="mt-8">
        {users.map((user, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 border-b border-teal-500"
          >
            <div className="w-[30%]">
              <div className="flex gap-1">
                <span className="font-semibold">Full Name:</span>
                <h2>{user.firstName} {user.lastName}</h2>
              </div>
              <div className="flex gap-1">
                <h3 className="font-semibold">Email:</h3>
                <span>{user.email}</span>
              </div>
              <div className="flex gap-1">
                <h4 className="font-semibold">Age:</h4>
                <span>{user.age} years</span>
              </div>
            </div>

            <div className="flex gap-5 flex-col">
              <button
                onClick={() => setUser(user)}
                className="text-yellow-400 hover:text-yellow-500 transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleUpdate(user.id)}
                className="text-blue-400 hover:text-blue-500 transition duration-300"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="text-red-400 hover:text-red-500 transition duration-300"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;
