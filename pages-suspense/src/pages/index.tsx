import { Comment } from "@/types";
import { getCommentsServer } from "@/getCommentsServer";

import Comments from "./components/Comments";

export async function getServerSideProps() {
  const comments = await getCommentsServer();

  return {
    props: {
      comments,
    },
  };
}

export default function Home({ comments }: { comments: Comment[] | null }) {
  return (
    <div className="mx-auto max-w-6xl mt-5 flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Comments comments={comments} />
    </div>
  );
}
