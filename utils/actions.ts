"use server";

import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

// Create type for User Object
type User = {
  id: string;
  firstName: string;
  lastName: string;
};

// Create user function
export const createUser = async (formData: FormData) => {
  "use server";
  //   console.log("hello from server ...");

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  // Create new user for database from input and use type "User"
  const newUser: User = { id: Date.now().toString(), firstName, lastName };

  console.log({ firstName, lastName });

  // NOTE: Alternative to collect multiple entries at once from formData
  //   const rawData = Object.fromEntries(formData);
  //   console.log(rawData);

  // Invoke Save New User
  await saveUser(newUser);
  // Revalidate Cache (clear and reload current cache)
  revalidatePath("/actions");
  // ALTERNATIVE: clear cache by re-routing (NOTE: will need to navigate to another page first)
  //   redirect("/");
};

// Fetch existing users function
export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};

// Save new user function
const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};
