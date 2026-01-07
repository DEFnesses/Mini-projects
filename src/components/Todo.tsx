import React from "react";

const Todo = () => {
  interface Todo {
    id: string;
    text: string;
    done: boolean;
  }
  return (
    <div>
      <div className="w-[900px] mx-auto bg-zinc-100 rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-black text-gray-900 text-center mb-8 drop-shadow-lg">
          📝 TODO
        </h1>

        <div className="flex gap-3 mb-8">
          <input
            id="input"
            className="flex-1 px-6 py-4 text-xl border-2 border-gray-200 rounded-xl "
            placeholder="Что нужно сделать?"
          />
          <button
            id="add"
            className="px-8 py-4 bg-blue-500 text-white text-xl font-bold rounded-xl shadow-lg "
          >
            Добавить
          </button>
        </div>

        <div id="list" className="space-y-3"></div>
      </div>
    </div>
  );
};

export default Todo;
