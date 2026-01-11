const Todo = () => {
  interface Todo {
    id: string;
    text: string;
    done: boolean;
  }
  return (
    <div>
      <div className="w-[900px] mx-auto bg-zinc-100 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          📝 TODO
        </h2>
        <div className="flex mb-8">
          <input
            id="input"
            className="flex-1 px-6 py-4 text-xl border-2 border-gray-200 rounded-xl focus:outline-none mr-3"
            placeholder="Что нужно сделать?"
          />
          <button
            onClick={() => {
              const node = document.getElementById("input") as HTMLInputElement;
              const task = node.value.trim();
              if (task) {
                const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

                tasks.push(task);

                localStorage.setItem("tasks", JSON.stringify(tasks));

                console.log("Сохранено в localStorage:", tasks);

                node.value = "";
              }
            }}
            id="add"
            className="px-8 py-4 bg-amber-500 text-white text-xl font-bold rounded-xl shadow-lg "
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
