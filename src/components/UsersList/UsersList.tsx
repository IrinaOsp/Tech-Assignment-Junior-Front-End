import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserRow from "../UserRow/UserRow";
import { AppDispatch, RootState } from "../../state/store";
import { fetchUsers, setFilter } from "../../state/userSlice";
import { Columns } from "../../types/types";
import THeadCell from "../THeadCell/THeadCell";

const COLUMNS: Columns[] = ["name", "username", "email", "phone"];

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
    <div className="w-full mt-5 p-3 flex items-center overflow-x-visible">
      <table className="w-full border border-slate-400">
        <thead>
          <tr>
            {COLUMNS.map((column) => (
              <THeadCell
                key={column}
                cellName={column}
                filter={filter}
                handleFilterChange={handleFilterChange}
              />
            ))}
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
