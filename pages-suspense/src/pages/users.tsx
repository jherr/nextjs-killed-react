import { useEffect, useState } from "react";

import { getCommentsServer } from "@/getCommentsServer";
import { getUsersServer } from "@/getUsersServer";

import { Comment, User } from "@/types";
import { USERS_DELAY } from "@/constants";

import Comments from "./components/Comments";
import Users from "./components/Users";

export async function getServerSideProps() {
  const comments = await getCommentsServer();
  const users = await getUsersServer();

  return {
    props: {
      users,
      comments,
    },
  };
}

export default function Home({
  users,
  comments,
}: {
  comments: Comment[] | null;
  users: User[] | null;
}) {
  return (
    <div className="mx-auto max-w-6xl mt-5 flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Users Page</h1>
      <div className="w-full flex gap-2 ">
        <div className="w-1/2">
          <Users users={users} />
        </div>
        <div className="w-1/2">
          <Comments comments={comments} />
        </div>
      </div>
    </div>
  );
}
