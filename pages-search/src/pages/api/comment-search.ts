// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Comment } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comment[]>
) {
  let search = "";
  if (typeof req.query.q === "string") {
    search = req.query.q;
  }

  const cres = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = (await cres.json()) as Comment[];

  res
    .status(200)
    .json(
      comments
        .filter(
          (comment) =>
            comment.name.toLowerCase().includes(search) ||
            comment.body.toLowerCase().includes(search)
        )
        .slice(0, 20)
    );
}
