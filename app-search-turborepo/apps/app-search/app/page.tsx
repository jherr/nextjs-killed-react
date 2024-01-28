import Comments from "@repo/ui/Comments";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl mt-5 flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Comments />
    </div>
  );
}
