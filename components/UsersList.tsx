import { fetchUsers } from "@/utils/actions";

const UsersList = async () => {
  const users = await fetchUsers();
  return (
    <div className="mt-4">
      {users.length ? (
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id} className="capitalize">
                {user.firstName} {user.lastName}
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
