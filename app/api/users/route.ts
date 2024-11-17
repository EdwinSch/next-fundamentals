// EXAMPLE: Using Route Handlers
// Note: Route Handlers are getting less use because of the new Next server actions.

import { fetchUsers, saveUser } from "@/utils/actions";
import { NextRequest } from "next/server";
import { nanoid } from "nanoid";

export const GET = async (request: NextRequest) => {
  console.log(request.url);
  console.log(request.nextUrl.searchParams.get("id"));

  const users = await fetchUsers();
  return Response.json({ users });
};

export const POST = async (request: Request) => {
  const user = await request.json();
  const newUser = { id: nanoid(), ...user };
  await saveUser(newUser);
  return Response.json({ msg: "user created" });
};
