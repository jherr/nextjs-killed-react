import type { NextApiRequest, NextApiResponse } from "next";

import { Comment } from "@/types";
import { COMMENTS_DELAY } from "@/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comment[]>
) {
  await new Promise((resolve) => setTimeout(resolve, COMMENTS_DELAY));
  const creq = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = (await creq.json()) as Comment[];

  res.status(200).json(comments.slice(0, 20));
}
