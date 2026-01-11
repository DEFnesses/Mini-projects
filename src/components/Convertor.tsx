const Convertor = () => {
  return (
    <div className="flex p-4">
      <div className="flex justify-center items-center w-[900px] mx-auto bg-zinc-100 rounded-2xl shadow-xl p-8 gap-4 flex-col">
        <h2 className="text-2xl font-bold text-center mb-6">Конвертор</h2>
        <div className="flex justify-center items-center gap-4 w-full">
          <input
            id="inputPct"
            className="flex-1 px-3 py-2 text-m border-2 border-gray-200 rounded-xl focus:outline-none"
            placeholder="Введи число"
          />
          <button
            onClick={() => {
              const percent = document.getElementById(
                "outputPct"
              ) as HTMLInputElement;
              percent.value = "7"
            }}
            className="px-4 py-2 bg-red-500 text-white text-xl font-bold rounded-xl"
          >
            Посчитаю проценты
          </button>
          <input
            id="outputPct"
            className="flex-1 px-3 py-2 text-m border-2 border-gray-200 rounded-xl focus:outline-none"
            placeholder="Выведу ответ"
          />
        </div>
      </div>
    </div>
  );
};

export default Convertor;
