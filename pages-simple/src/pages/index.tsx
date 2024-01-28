import Comments from "./components/Comments";
import { Comment } from "@/types";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = (await res.json()) as Comment[];

  return {
    props: {
      comments: comments.slice(0, 20),
    },
  };
}

export default function Home({ comments }: { comments: Comment[] }) {
  return (
    <div className="mx-auto max-w-6xl mt-5 flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Comments comments={comments} />
    </div>
  );
}
