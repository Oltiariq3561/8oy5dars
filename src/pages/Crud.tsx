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
    <div className="container mx-auto w-[600px] bg-slate-900 text-white p-5 mt-5 rounded-lg text-center">
      <h2 className="text-3xl mb-4 font-bold font-serif">CRUD</h2>
      <form className="flex flex-col gap-4 items-center">
        <input
          className="border rounded-md font-mono p-2 w-full"
          placeholder="Enter name..."
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <input
          className="border rounded-md font-mono p-2 w-full"
          placeholder="Enter surname..."
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <input
          className="border rounded-md font-mono p-2 w-full"
          placeholder="Enter email..."
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          className="border rounded-md font-mono p-2 w-full"
          type="number"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 cursor-pointer w-full text-white py-2 rounded-md"
        >
          User Added
        </button>
      </form>

      <ul>
        {users.map((user, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border-b"
          >
            <div className="w-[30%]">
              <div className="flex gap-1">
                <span>Full Name:</span>
                <h2>{user.firstName} </h2>
                <h2> {user.lastName}</h2>
              </div>
              <div className="flex gap-1">
                <h3>Email:</h3>
                <span>{user.email}</span>
              </div>
              <div className="flex gap-1">
                <h4>Age:</h4>
                <span>{user.age} yosh</span>
              </div>
            </div>

            <div className="flex gap-1 flex-col">
              <button
                onClick={() => setUser(user)}
                className="text-yellow-500 cursor-pointer"
              >
                Edit
              </button>
              <button
                className="text-green-500 cursor-pointer"
                onClick={() => handleUpdate(user.id)}
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="text-red-500 cursor-pointer"
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
