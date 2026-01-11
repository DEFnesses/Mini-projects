import React from "react";

const UseState = () => {
  const [numbers, setNumbers] = React.useState<number[]>([1, 2, 3]);

  const addNumber = () => {
    const rndNumber = Math.floor(Math.random() * 100);
    const newArr = [...numbers, rndNumber];
    setNumbers(newArr);
  };

  return (
    <div className="flex justify-center items-center w-[420px] mx-auto mb-10 bg-zinc-100 rounded-2xl shadow-xl p-8 gap-4 flex-col">
      <h2 className="text-2xl font-bold text-center">UseState</h2>
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
