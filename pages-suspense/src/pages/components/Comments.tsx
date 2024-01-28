import { useEffect, useState } from "react";
import { Comment } from "@/types";

export default function Comments({
  comments: initialComments,
}: {
  comments: Comment[] | null;
}) {
  const [comments, setComments] = useState<Comment[] | null>(initialComments);

  useEffect(() => {
    async function fetchComments() {
      const res = await fetch("/api/comments");
      const comments = (await res.json()) as Comment[];
      setComments(comments);
    }
    if (!initialComments) {
      fetchComments();
    }
  }, [initialComments]);

  if (!comments) return <div>Loading comments from client...</div>;

  return (
    <div className="@container border-2 border-gray-500 rounded-xl p-2">
      <h1 className="text-3xl font-bold">Comments</h1>
      <div className="flex flex-wrap items-center justify-around">
        {(comments ?? []).map((comment) => (
          <div className="p-2 text-left w-full @md:w-1/2" key={comment.id}>
            <div className="p-2 border border-gray-200 rounded-md">
              <h3 className="text-2xl font-bold">{comment.name}</h3>
              <p className="mt-4 text-xl">{comment.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
