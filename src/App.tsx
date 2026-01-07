import { useState } from "react";
import "./App.css";
import Calc from "./components/Calc";
import Todo from "./components/Todo";

function App() {
  const [showCalc, setShowCalc] = useState<boolean>(false);
  const [showTodo, setShowTodo] = useState<boolean>(false);

  return (
    <div className="App">
      <h1 className="text-6xl font-bold mt-8 mb-16">Мини-проекты</h1>
      <button 
        onClick={() => setShowCalc(!showCalc)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 mr-6"
      >
        Калькулятор
      </button>
      {showCalc && <Calc />}
      <button 
        onClick={() => setShowTodo(!showTodo)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
      >
        ToDo
      </button>
      {showTodo && <Todo />}
    </div>
  );
}

export default App;
