import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoReact = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("");

  const addTodo = () => {
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  return (
    <div className="flex justify-center items-center w-[820px] mx-auto mb-10 bg-zinc-100 rounded-2xl shadow-xl p-8 gap-4 flex-col">
      <h2 className="text-2xl font-bold text-center">ToDo React</h2>
      <div className="flex gap-4">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="h-10 w-[500px] p-6 text-xl text-left focus:outline-none rounded-xl"
          placeholder="Новая задача"
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-gray-500 text-white text-xl font-bold rounded-xl"
        >
          Добавить
        </button>
      </div>
      <div className="flex flex-wrap justify-center w-[500px] text-xl p-4 bg-gray-200 rounded-2xl ">
        <ul className="w-full break-words ">
          {todos.map((todo) => (
            <li key={todo.id} className="mb-1">
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoReact;
