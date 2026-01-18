import React from "react";
import Count from "./Count";
import IsFive from "./IsFive";

const UseMemo = () => {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  return (
    <div className="flex justify-center items-center w-[420px] mx-auto mb-10 bg-zinc-100 rounded-2xl shadow-xl p-8 gap-4 flex-col">
      <h2 className="text-2xl font-bold text-center">UseMemo</h2>
      <h5>Счётчик 1: </h5>
      <div>
        <button
          className="px-4 py-2 mb-2 bg-indigo-500 text-white text-xl font-bold rounded-xl"
          onClick={() => setCount1(count1 + 1)}
        >
          +
        </button>
        <Count id={1} value={count1} />
      </div>

      <h5>Счётчик 2: </h5>
      <div>
        <button
          className="px-4 py-2 mb-2 bg-indigo-500 text-white text-xl font-bold rounded-xl"
          onClick={() => setCount2(count2 + 1)}
        >
          +
        </button>
        <Count id={2} value={count2} />
        <IsFive value={count2} />
      </div>
    </div>
  );
};

export default UseMemo;
