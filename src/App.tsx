import { useState } from "react";
import "./App.css";
import Calc from "./components/Calc";
import Todo from "./components/Todo";
import Convertor from "./components/Convertor";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect/UseEffect";
import UseRef from "./components/UseRef";
import UseMemo from "./components/UseMemo/UseMemo";

function App() {
  const [showCalc, setShowCalc] = useState<boolean>(false);
  const [showTodo, setShowTodo] = useState<boolean>(false);
  const [showConvertor, setShowConvertor] = useState<boolean>(false);
  const [showUseState, setShowUseState] = useState<boolean>(false);
  const [showUseEffect, setShowUseEffect] = useState<boolean>(false);
  const [showUseRef, setShowUseRef] = useState<boolean>(false);
  const [showUseMemo, setShowUseMemo] = useState<boolean>(false);

  return (
    <div className="App ">
      <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-6xl font-bold mt-8 mb-10">Мини-проекты</h1>
      <h2 className="text-4xl font-bold mb-10">TypeScritp</h2>
        <button
          onClick={() => setShowConvertor(!showConvertor)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Конвертор
        </button>
        {showConvertor && <Convertor />}

        <button
          onClick={() => setShowCalc(!showCalc)}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded "
        >
          Калькулятор
        </button>
        {showCalc && <Calc />}

        <button
          onClick={() => setShowTodo(!showTodo)}
          className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mb-10"
        >
          ToDo
        </button>
        {showTodo && <Todo />}
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-4xl font-bold mb-6">React Hooks</h2>
        <button
          onClick={() => setShowUseState(!showUseState)}
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded "
        >
          useState
        </button>
        {showUseState && <UseState />}

        <button
          onClick={() => setShowUseEffect(!showUseEffect)}
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded "
        >
          useEffect
        </button>
        {showUseEffect && <UseEffect />}

        <button
          onClick={() => setShowUseRef(!showUseRef)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        >
          useRef
        </button>
        {showUseRef && <UseRef />}

        <button
          onClick={() => setShowUseMemo(!showUseMemo)}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded "
        >
          useMemo
        </button>
        {showUseMemo && <UseMemo />}
      </div>
    </div>
  );
}

export default App;
