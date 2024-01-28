"use client";
import { useState } from "react";
import { Comment } from "./types";

export default function SearchableComments({
  comments,
  search,
}: {
  comments: Comment[];
  search: (search: string) => Promise<Comment[]>;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(comments);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSearchResults(await search(e.target.value));
  };

  return (
    <div className="@container border-2 border-gray-500 rounded-xl p-2">
      <div className="flex gap-2 justify-center">
        <input
          type="text"
          className="border-2 border-gray-500 rounded-xl p-2 w-full flex-grow text-black"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="bg-blue-500 text-white rounded-xl p-2 w-full mt-2">
          Submit
        </button>
      </div>
      <h1 className="text-3xl font-bold">Comments</h1>
      <div className="flex flex-wrap items-center justify-around">
        {searchResults.map((comment) => (
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
