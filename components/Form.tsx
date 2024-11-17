"use client";

// ALTERNATIVE (1)
// "use server";

import { createUser } from "@/utils/actions";
import { useFormStatus } from "react-dom";

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";

// ALTERNATIVE (1): Serverside logic can be used directly within the component. But the component has to be a "use server" component on top. Can not be a "use client"
// const createUser = async () => {
//   "use server";
//   console.log("creating user...");
// };

// Rendering submit BTN as a component to use Form hooks
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={btnStyle} disabled={pending}>
      {pending ? "submitting..." : "submit"}
    </button>
  );
};

const Form = () => {
  return (
    <form action={createUser} className={formStyle}>
      <h2 className="text-2xl capitalize mb-4">create user</h2>
      <input
        type="text"
        name="firstName"
        required
        className={inputStyle}
        // defaultValue="john"
      />
      <input
        type="text"
        name="lastName"
        required
        className={inputStyle}
        // defaultValue="smith"
      />
      <SubmitButton />
    </form>
  );
};
export default Form;
