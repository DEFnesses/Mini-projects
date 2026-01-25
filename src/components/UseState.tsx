import React from "react";

const UseState = () => {
  const [numbers, setNumbers] = React.useState<number[]>([1, 2, 3]);
  const [info, setInfo] = React.useState<boolean>(false);

  const addNumber = () => {
    const rndNumber = Math.floor(Math.random() * 100);
    const newArr = [...numbers, rndNumber];
    setNumbers(newArr);
  };

  return (
    <div className="relative flex justify-center items-center w-[420px] mx-auto mb-10 bg-zinc-100 rounded-2xl shadow-xl p-8 gap-4 flex-col">
      <h2 className="text-2xl font-bold text-center">UseState</h2>
      <img
        onClick={() => setInfo(!info)}
        className="absolute top-3 right-3 w-6 h-6 cursor-pointer"
        src="img/info.svg"
      />

      {info && (
        <div className="absolute w-[320px] bg-zinc-200 rounded-2xl shadow-xl py-8  ">
          <p >Программа реализует функционал добавления случайного числа в список чисел по нажатию кнопки</p>
        </div>
      )}

      <ul>
        {numbers.map((num: number, index: number) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button
        onClick={addNumber}
        className="px-4 py-2 bg-cyan-500 text-white text-xl font-bold rounded-xl"
      >
        Новое число
      </button>
    </div>
  );
};

export default UseState;
