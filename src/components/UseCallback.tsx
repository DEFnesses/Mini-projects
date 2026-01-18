import React from "react";

const UseCallback = () => {
  const [numbers, setNumbers] = React.useState<number[]>([1, 2, 3, 4, 5]);
  const ulRef = React.useRef<HTMLDivElement>(null);

  const addNumber = () => {
    const lastNumber = numbers[numbers.length - 1];
    setNumbers([...numbers, lastNumber + 1]);
  };

  const handleScroll = () => {
    console.log("Был скролл");
  };

  React.useEffect(() => {
    if (ulRef.current) {
      ulRef.current.addEventListener("scroll", handleScroll);
    }
  }, [numbers]);
  return (
    <>
      <div
        className="flex w-[420px] h-[100px] mx-auto mb-10 bg-zinc-100 rounded-2xl shadow-xl p-2 gap-4 flex-col overflow-y-auto"
        ref={ulRef}
      >
        <h2 className="text-2xl font-bold text-center">UseCallback</h2>
        <ul>
          {numbers.map((n: number) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={addNumber}
        className="px-4 py-2 bg-blue-500 text-white text-xl font-bold rounded-xl"
      >
        Добавить число
      </button>
    </>
  );
};

export default UseCallback;
