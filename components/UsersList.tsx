import { fetchUsers } from "@/utils/actions";
import DeleteButton from "./DeleteButton";

const UsersList = async () => {
  const users = await fetchUsers();
  return (
    <div className="mt-4">
      {users.length ? (
        <ul>
          {users.map((user) => {
            return (
              <li
                key={user.id}
                className="capitalize flex justify-between items-center mb-2"
              >
                {user.firstName} {user.lastName} <DeleteButton id={user.id} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-red-500">No users found</p>
      )}
    </div>
  );
};
export default UsersList;
