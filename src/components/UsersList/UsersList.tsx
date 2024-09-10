import { useEffect, useState } from "react";
import { User } from "../../types/types";
import UserRow from "../UserRow/UserRow";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          setUsers(json);
        });
    };

    getUsers();
  }, []);
  return (
    <div className="w-full">
      <table className="border border-slate-300">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} userData={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
