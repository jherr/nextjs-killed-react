import Comments from "../components/Comments";
import Users from "../components/Users";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl mt-5 flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Users Page</h1>
      <div className="w-full flex gap-2 ">
        <div className="w-1/2">
          <Users />
        </div>
        <div className="w-1/2">
          <Comments />
        </div>
      </div>
    </div>
  );
}
