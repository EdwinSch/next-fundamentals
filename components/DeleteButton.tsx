import { deleteUser, removeUser } from "@/utils/actions";

const DeleteButton = ({ id }: { id: string }) => {
  return (
    <form action={deleteUser}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="bg-red-500 text-white text-xs rounded p-2"
      >
        delete
      </button>
    </form>
  );

  // ALTERNATIVE: Using bind method from actions

  const removeUserWithId = removeUser.bind(null, id);
  return (
    <form action={removeUserWithId}>
      <input type="hidden" name="name" value={"shakeAndBake"} />
      <button
        type="submit"
        className="bg-red-500 text-white text-xs rounded p-2"
      >
        delete
      </button>
    </form>
  );
};
export default DeleteButton;
