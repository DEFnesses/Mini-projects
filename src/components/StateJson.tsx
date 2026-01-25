import React from "react";

type User = {
  id: number;
  name: string;
};

const StateJson = () => {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  },[]);

  return (
    <div className="flex justify-center items-center w-[420px] mx-auto mb-10 bg-zinc-100 rounded-2xl shadow-xl p-8 gap-4 flex-col">
      <h2 className="text-2xl font-bold text-center">State Json</h2>
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StateJson;
