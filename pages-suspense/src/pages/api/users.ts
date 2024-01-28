import type { NextApiRequest, NextApiResponse } from "next";

import { User } from "@/types";
import { USERS_DELAY } from "@/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  await new Promise((resolve) => setTimeout(resolve, USERS_DELAY));
  const ures = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await ures.json()) as User[];

  res.status(200).json(users.slice(0, 20));
}
