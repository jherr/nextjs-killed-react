import { Comment } from "@/types";

export default async function Comments() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = (await res.json()) as Comment[];

  return (
    <div className="@container border-2 border-gray-500 rounded-xl p-2">
      <h1 className="text-3xl font-bold">Comments</h1>
      <div className="flex flex-wrap items-center justify-around">
        {comments.slice(0, 20).map((comment) => (
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
