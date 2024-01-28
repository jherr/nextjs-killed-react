import Comments from "./components/Comments";
import Users from "./components/Users";
import { Comment, User } from "@/types";

export async function getServerSideProps() {
  const cres = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = (await cres.json()) as Comment[];

  const ures = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await ures.json()) as Comment[];

  return {
    props: {
      users: users.slice(0, 20),
      comments: comments.slice(0, 20),
    },
  };
}

export default function Home({
  users,
  comments,
}: {
  comments: Comment[];
  users: User[];
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
