import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState<number>(0);

  const countSum = (step: number) => {
    setCount((prevCount) => prevCount + step);
  };

  const countMulti = (step: number) => {
    setCount((prevCount) => prevCount * step);
  };

  const countDevide = (step: number) => {
    setCount((prevCount) => prevCount / step);
  };

  React.useEffect(() => {
    console.log("Значение изменилось");
  }, [count]);

  return (
    <div className="flex justify-center items-center w-[420px] mx-auto mb-10 bg-zinc-100 rounded-2xl shadow-xl p-8 gap-4 flex-col">
      <h2 className="text-2xl font-bold text-center">Counter</h2>
      <h3 className="h-10 w-[300px] text-xl text-center text-bold">{count}</h3>
      <div className="flex gap-4">
        <button
          onClick={() => countSum(1)}
          className="w-[85px] bg-slate-500 py-2 px-4 text-white rounded"
        >
          +1
        </button>
        <button
          onClick={() => countSum(-1)}
          className="w-[85px] bg-slate-500 py-2 px-4 text-white rounded"
        >
          -1
        </button>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => countSum(5)}
          className="w-[85px] bg-slate-500 py-2 px-4 text-white rounded"
        >
          +5
        </button>
        <button
          onClick={() => countSum(-5)}
          className="w-[85px] bg-slate-500 py-2 px-4 text-white rounded"
        >
          -5
        </button>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => countMulti(2)}
          className="w-[85px] bg-slate-500 py-2 px-4 text-white rounded"
        >
          *2
        </button>
        <button
          onClick={() => countDevide(2)}
          className="w-[85px] bg-slate-500 py-2 px-4 text-white rounded"
        >
          /2
        </button>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => countMulti(10)}
          className="w-[85px] bg-slate-500 py-2 px-4 text-white rounded"
        >
          x10
        </button>
        <button
          onClick={() => countDevide(10)}
          className="w-[85px] bg-slate-500 py-2 px-4 text-white rounded"
        >
          /1000%
        </button>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(0)}
          className="w-[85px] bg-red-500 py-2 px-4 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
