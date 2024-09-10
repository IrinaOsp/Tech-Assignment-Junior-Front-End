import { useEffect } from "react";
import UserRow from "../UserRow/UserRow";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { fetchUsers, setFilter } from "../../state/userSlice";

const UsersList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, filter } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ [e.target.name]: e.target.value }));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filter.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filter.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(filter.phone.toLowerCase()),
  );

  return (
    <div className="w-full">
      <table className="border border-slate-300">
        <thead>
          <tr>
            <th scope="col">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Search by Name"
                value={filter.name}
                onChange={handleFilterChange}
                className="border p-1"
              />
            </th>
            <th scope="col">
              <span>Username</span>
              <input
                type="text"
                name="username"
                placeholder="Search by Username"
                value={filter.username}
                onChange={handleFilterChange}
                className="border p-1"
              />
            </th>
            <th scope="col">
              <span>Email</span>
              <input
                type="text"
                name="email"
                placeholder="Search by Email"
                value={filter.email}
                onChange={handleFilterChange}
                className="border p-1"
              />
            </th>
            <th scope="col">
              <span>Phone</span>
              <input
                type="text"
                name="phone"
                placeholder="Search by Phone"
                value={filter.phone}
                onChange={handleFilterChange}
                className="border p-1"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <UserRow key={user.id} userData={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
