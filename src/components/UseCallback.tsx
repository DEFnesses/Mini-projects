import React from "react";

const UseCallback = () => {
  const [numbers, setNumbers] = React.useState<number[]>([1, 2, 3, 4, 5]);
  const ulRef = React.useRef<HTMLDivElement>(null);
  const numbersRef = React.useRef<number[]>([]);

  numbersRef.current = numbers;

  const addNumber = () => {
    const lastNumber = numbers[numbers.length - 1];
    setNumbers([...numbers, lastNumber + 1]);
  };

  const handleScroll = React.useCallback(() => {
    console.log("Был скролл", numbersRef.current);
  }, []);

  React.useEffect(() => {
    if (ulRef.current) {
      ulRef.current.addEventListener("scroll", handleScroll);
    }
  }, [numbers]);

  const removeScroll = () => {
    if (ulRef.current) {
      ulRef.current.removeEventListener("scroll", handleScroll);
    }
  };

  return (
    <>
      <div
        className="flex w-[420px] h-[200px] mx-auto mb-10 bg-zinc-100 rounded-2xl shadow-xl p-2 gap-4 flex-col overflow-y-auto"
        ref={ulRef}
      >
        <h2 className="text-2xl font-bold text-center">UseCallback</h2>
        <ul>
          {numbers.map((n: number) => (
            <li className="mb-6" key={n}>
              {n}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        <button
          onClick={addNumber}
          className="px-4 py-2 bg-blue-500 text-white text-xl font-bold rounded-xl"
        >
          Добавить число
        </button>
        <button
          onClick={removeScroll}
          className="px-4 py-2 bg-blue-500 text-white text-xl font-bold rounded-xl"
        >
          Не следить
        </button>
      </div>
    </>
  );
};

export default UseCallback;
