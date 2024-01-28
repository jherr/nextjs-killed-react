export default function Users({
  users,
}: {
  users: {
    id: number;
    name: string;
    phone: string;
  }[];
}) {
  return (
    <div className="@container border-2 border-blue-500 rounded-xl p-2">
      <h1 className="text-3xl font-bold">Users</h1>
      <div className="flex flex-wrap items-center justify-around">
        {users.map((user) => (
          <div className="p-2 text-left w-full @md:w-1/2" key={user.id}>
            <div className="p-2 border border-gray-200 rounded-md">
              <h3 className="text-2xl font-bold">{user.name}</h3>
              <p className="mt-4 text-xl">{user.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
