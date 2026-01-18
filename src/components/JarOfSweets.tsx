import React, { useState } from "react";

const JarOfSweets = () => {
  const [sweets, setSweets] = useState<string[]>([]);

  const sweetTypes = ["🍪", "🍫", "🍩", "🍬", "🍭"];

  const addSweets = () => {
    if (sweets.length < 20) {
      const randomSweet =
        sweetTypes[Math.floor(Math.random() * sweetTypes.length)];
      setSweets([...sweets, randomSweet]);
    }
  };


  
  const eatAll = () => {
    setSweets([]);
  };

  return (
    <div className="flex justify-center items-center w-[420px] mx-auto mb-10 bg-zinc-100 rounded-2xl shadow-xl p-8 gap-4 flex-col">
      <h2 className="text-2xl font-bold text-center">Jar Of Sweets</h2>
      <button
        onClick={addSweets}
        disabled={sweets.length >= 20}
        className="px-4 py-2 bg-purple-500 text-white text-xl font-bold rounded-xl"
      >
        Заполнить банку
      </button>
      <div className="flex h-40 w-[150px] p-4 bg-white rounded-xl">
        <h3 className="h-10 w-[300px] text-xl text-center text-bold">
          {sweets}
        </h3>
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        <button className="px-4 py-2 bg-purple-500 text-white text-xl font-bold rounded-xl">
          Достать 🍬
        </button>
        <button className="px-4 py-2 bg-purple-500 text-white text-xl font-bold rounded-xl">
          Достать 🍪
        </button>
        <button className="px-4 py-2 bg-purple-500 text-white text-xl font-bold rounded-xl">
          Достать 🍫
        </button>
        <button className="px-4 py-2 bg-purple-500 text-white text-xl font-bold rounded-xl">
          Достать 🍭
        </button>
        <button className="px-4 py-2 bg-purple-500 text-white text-xl font-bold rounded-xl">
          Достать 🍩
        </button>
        <button
          onClick={eatAll}
          className="px-4 py-2 bg-red-500 text-white text-xl font-bold rounded-xl"
        >
          СЪЕСТЬ ВСЁ!
        </button>
      </div>
    </div>
  );
};

export default JarOfSweets;
