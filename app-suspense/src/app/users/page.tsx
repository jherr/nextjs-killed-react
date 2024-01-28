import { Suspense } from "react";
import Comments from "../components/Comments";
import Users from "../components/Users";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl mt-5 flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Users Page</h1>
      <div className="w-full flex gap-2 ">
        <div className="w-1/2">
          <Suspense fallback={<div>Loading users...</div>}>
            <Users />
          </Suspense>
        </div>
        <div className="w-1/2">
          <Suspense fallback={<div>Loading comments...</div>}>
            <Comments />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
