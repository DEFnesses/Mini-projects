import React from "react";

type QuestionType = {
  title: string;
  variants: string[];
  correct: number;
};

type QuizProps = {
  question: QuestionType;
};

const questions: QuestionType[] = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function Result() {
  return (
    <div className="flex flex-col items-center gap-4">
      <img
        className="w-[100px] h-[100px]"
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
      />
      <h2>Вы отгадали 3 ответа из 10</h2>
      <button className=" bg-violet-500 rounded-2xl p-2 text-white">
        Попробовать снова
      </button>
    </div>
  );
}

function Game({ question }: QuizProps) {
  return (
    <>
      <div>
        <div></div>
      </div>
      <h1 className="text-xl font-bold">{question.title}</h1>
      <ul className="flex flex-col gap-2">
        {question.variants.map((text) => (
          <li key={text} className="border-2 border-gray-300 p-2 rounded-2xl hover:border-gray-600 ">
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

const Quiz = () => {
  const [step, setStep] = React.useState(0);
  const question = questions[step];

  return (
    <div className="flex justify-center items-center w-[820px] mx-auto mb-10 bg-zinc-100 rounded-2xl shadow-xl p-8 gap-4 flex-col">
      <h2 className="text-2xl font-bold text-center">Quiz</h2>
      <Game question={question} />
      {/* <Result /> */}
    </div>
  );
};

export default Quiz;
