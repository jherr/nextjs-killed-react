import SearchableComments from "./SearchableComments";
import { Comment } from "./types";

const getComments = async () =>
  (
    await fetch("https://jsonplaceholder.typicode.com/comments")
  ).json() as Promise<Comment[]>;

export default async function Comments() {
  const comments = await getComments();

  const search = async (search: string) => {
    "use server";
    const comments = await getComments();
    return comments
      .filter(
        (comment) =>
          comment.name.toLowerCase().includes(search) ||
          comment.body.toLowerCase().includes(search)
      )
      .slice(0, 20);
  };

  return (
    <SearchableComments comments={comments.slice(0, 20)} search={search} />
  );
}
