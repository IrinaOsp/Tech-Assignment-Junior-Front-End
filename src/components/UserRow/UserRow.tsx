import { User } from "../../types/types";

const UserRow = ({ userData }: { userData: Partial<User> }) => {
  return (
    <tr className="p-2 border border-slate-300">
      <td className="p-2">{userData.name || "-"}</td>
      <td className="p-2">{userData.username || "-"}</td>
      <td className="p-2">{userData.email || "-"}</td>
      <td className="p-2">{userData.phone || "-"}</td>
    </tr>
  );
};

export default UserRow;
