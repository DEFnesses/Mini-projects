import { useState } from "react";
import "./App.css";
import Calc from "./components/Calc";
import Todo from "./components/Todo";
import Convertor from "./components/Convertor";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect/UseEffect";
import UseRef from "./components/UseRef";
import UseMemo from "./components/UseMemo/UseMemo";
import UseCallback from "./components/UseCallback";
import Counter from "./components/Counter";
import JarOfSweets from "./components/JarOfSweets";
import TodoReact from "./components/TodoReact";

function App() {
  const [showCalc, setShowCalc] = useState<boolean>(false);
  const [showTodo, setShowTodo] = useState<boolean>(false);
  const [showConvertor, setShowConvertor] = useState<boolean>(false);
  const [showUseState, setShowUseState] = useState<boolean>(false);
  const [showUseEffect, setShowUseEffect] = useState<boolean>(false);
  const [showUseRef, setShowUseRef] = useState<boolean>(false);
  const [showUseMemo, setShowUseMemo] = useState<boolean>(false);
  const [showUseCallback, setShowUseCallback] = useState<boolean>(false);
  const [showCounter, setShowCounter] = useState<boolean>(false);
  const [showJar, setShowJar] = useState<boolean>(false);
  const [showTodoReact, setShowTodoReact] = useState<boolean>(false);

  return (
    <div className="App ">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-6xl font-bold mt-8 mb-10">Мини-проекты</h1>
        {/* <h2 className="text-4xl font-bold mb-10">TypeScritp</h2>
        <button
          onClick={() => setShowConvertor(!showConvertor)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Конвертор🛑
        </button>
        {showConvertor && <Convertor />}

        <button
          onClick={() => setShowCalc(!showCalc)}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded "
        >
          Калькулятор✅
        </button>
        {showCalc && <Calc />}

        <button
          onClick={() => setShowTodo(!showTodo)}
          className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mb-10"
        >
          ToDo🛑
        </button>
        {showTodo && <Todo />} */}
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-4xl font-bold mb-6">"Теория" React Hooks</h2>
        <button
          onClick={() => setShowUseState(!showUseState)}
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded "
        >
          useState✅
        </button>
        {showUseState && <UseState />}

        <button
          onClick={() => setShowUseEffect(!showUseEffect)}
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded "
        >
          useEffect✅
        </button>
        {showUseEffect && <UseEffect />}

        <button
          onClick={() => setShowUseRef(!showUseRef)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        >
          useRef✅
        </button>
        {showUseRef && <UseRef />}

        <button
          onClick={() => setShowUseMemo(!showUseMemo)}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded "
        >
          useMemo✅
        </button>
        {showUseMemo && <UseMemo />}

        <button
          onClick={() => setShowUseCallback(!showUseCallback)}
          className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded "
        >
          useCallback
        </button>
        {showUseCallback && <UseCallback />}

        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="text-4xl font-bold mb-6">"Практика" React Hooks</h2>
          <button
            onClick={() => setShowJar(!showJar)}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Jar Of Sweets🛑
          </button>
          {showJar && <JarOfSweets />}

          <button
            onClick={() => setShowCounter(!showCounter)}
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
          >
            Counter✅
          </button>
          {showCounter && <Counter />}

          <button
            onClick={() => setShowTodoReact(!showTodoReact)}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            ToDo React
          </button>
          {showTodoReact && <TodoReact />}
        </div>
      </div>
    </div>
  );
}

export default App;
