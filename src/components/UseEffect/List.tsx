import React from "react";

const List = () => {
  const [numbers, setNumbers] = React.useState<number[]>([1, 2, 3]);
  const [info, setInfo] = React.useState<boolean>(false);

  const addNumber = () => {
    const rndNumber = Math.floor(Math.random() * 100);
    const newArr = [...numbers, rndNumber];
    setNumbers(newArr);
  };

  React.useEffect(() => {
    console.log("Компонент был отображён");
  }, [numbers]);

  return (
    <div className="relative flex justify-center items-center w-[420px] mx-auto mb-10 bg-zinc-100 rounded-2xl shadow-xl p-8 gap-4 flex-col">
      <h2 className="text-2xl font-bold text-center">UseEffect</h2>
      <img
        onClick={() => setInfo(!info)}
        className="absolute top-3 right-3 w-6 h-6 cursor-pointer"
        src="img/info.svg"
      />

      <div
        className={`absolute w-[320px] bg-zinc-200 rounded-2xl shadow-xl py-8 transition-all duration-800 ${info ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <p>
          Программа реализует функционал добавления случайного числа в список
          чисел по нажатию кнопки с логированием изменений в консоль через
          useEffect
        </p>
      </div>

      <ul>
        {numbers.map((num: number, index: number) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button
        onClick={addNumber}
        className="px-4 py-2 bg-sky-500 text-white text-xl font-bold rounded-xl"
      >
        Новое число
      </button>
    </div>
  );
};

export default List;
