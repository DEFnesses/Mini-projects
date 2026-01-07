const Calc = () => {
  let firstNumber: number = 0;
  let waitingForSecondNumber: boolean = false;
  let currentOperation = "";

  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-180 bg-gray-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Калькулятор</h2>
        <div className="flex flex-col items-center gap-3">
          <input
            className="h-10 text-xl text-right"
            id="value"
            defaultValue="0"
          ></input>
          <div className="flex gap-3">
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                digit.value = (-parseFloat(digit.value) || 0).toString();
              }}
              className="w-14 h-16 bg-gray-500 text-white rounded-lg font-extrabold text-3xl"
            >
              +/-
            </button>

            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                digit.value = digit.value === "0" ? "7" : digit.value + "7";
              }}
              className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl"
            >
              7
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                digit.value = digit.value === "0" ? "8" : digit.value + "8";
              }}
              className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl"
            >
              8
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                digit.value = digit.value === "0" ? "9" : digit.value + "9";
              }}
              className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl"
            >
              9
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                firstNumber = parseFloat(digit.value);
                currentOperation = "/";
                waitingForSecondNumber = true;
                digit.value = "0";
              }}
              className="w-14 h-16 bg-gray-500 text-white rounded-lg font-extrabold text-3xl"
            >
              /
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                digit.value = (parseFloat(digit.value) / 100 || 0).toString();
              }}
              className="w-14 h-16 bg-gray-500 text-white rounded-lg font-extrabold text-3xl"
            >
              %
            </button>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                if (digit.value !== "0") {
                  digit.value = digit.value.slice(0, -1) || "0";
                }
              }}
              className="w-14 h-16 bg-gray-500 text-white rounded-lg font-extrabold text-3xl"
            >
              →
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                digit.value = digit.value === "0" ? "4" : digit.value + "4";
              }}
              className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl"
            >
              4
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                digit.value = digit.value === "0" ? "5" : digit.value + "5";
              }}
              className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl"
            >
              5
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                digit.value = digit.value === "0" ? "6" : digit.value + "6";
              }}
              className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl"
            >
              6
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                firstNumber = parseFloat(digit.value);
                currentOperation = "x";
                waitingForSecondNumber = true;
                digit.value = "0";
              }}
              className="w-14 h-16 bg-gray-500 text-white rounded-lg font-extrabold text-3xl"
            >
              x
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                firstNumber = parseFloat(digit.value);
                currentOperation = "-";
                waitingForSecondNumber = true;
                digit.value = "0";
              }}
              className="w-14 h-16 bg-gray-500 text-white rounded-lg font-extrabold text-3xl"
            >
              -
            </button>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                digit.value = "0";
              }}
              className="w-14 h-16 bg-red-600 text-white rounded-lg font-extrabold text-3xl"
            >
              AC
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                digit.value = digit.value === "0" ? "1" : digit.value + "1";
              }}
              className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl"
            >
              1
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                digit.value = digit.value === "0" ? "2" : digit.value + "2";
              }}
              className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl"
            >
              2
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                digit.value = digit.value === "0" ? "3" : digit.value + "3";
              }}
              className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl"
            >
              3
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                firstNumber = parseFloat(digit.value);
                currentOperation = "+";
                waitingForSecondNumber = true;
                digit.value = "0";
              }}
              className="w-[120px] h-16 bg-gray-500 text-white rounded-lg font-extrabold text-3xl"
            >
              +
            </button>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                digit.value = "0";
              }}
              className="w-14 h-16 bg-red-600 text-white rounded-lg font-extrabold text-3xl"
            >
              C
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                digit.value = digit.value + "0";
              }}
              className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl"
            >
              0
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                digit.value = digit.value === "0" ? "00" : digit.value + "00";
              }}
              className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl"
            >
              00
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                if (digit.value.includes(".")) return;
                digit.value = digit.value === "0" ? "0." : digit.value + ".";
              }}
              className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl"
            >
              .
            </button>
            <button
              onClick={() => {
                const digit = document.getElementById(
                  "value"
                ) as HTMLInputElement;
                const secondNumber = parseFloat(digit.value);
                switch (currentOperation) {
                  case "+":
                    digit.value = (firstNumber + secondNumber).toString();
                    break;
                  case "-":
                    digit.value = (firstNumber - secondNumber).toString();
                    break;
                  case "x":
                    digit.value = (firstNumber * secondNumber).toString();
                    break;
                  case "/":
                    digit.value = (firstNumber / secondNumber || 0).toString();
                    break;
                }
                waitingForSecondNumber = false;
                currentOperation = "";
              }}
              className="w-[120px] h-16 bg-blue-500 text-white rounded-lg font-extrabold text-3xl "
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calc;
