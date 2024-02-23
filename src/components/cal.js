import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [resultDisplayed, setResultDisplayed] = useState(false);

  const handleNumberClick = (number) => {
    let currentString = input;
    let lastChar = currentString[currentString.length - 1];

    if (!resultDisplayed) {
      setInput(currentString + number);
    } else if (
      resultDisplayed &&
      (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷")
    ) {
      setResultDisplayed(false);
      setInput(currentString + number);
    } else {
      setResultDisplayed(false);
      setInput(number);
    }
  };

  const handleOperatorClick = (operator) => {
    let currentString = input;
    let lastChar = currentString[currentString.length - 1];

    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      let newString = currentString.substring(0, currentString.length - 1) + operator;
      setInput(newString);
    } else if (currentString.length === 0) {
      console.log("Enter a number first");
    } else {
      setInput(currentString + operator);
    }
  };

  const handleEqualClick = () => {
    let inputString = input;
    let numbers = inputString.split(/\+|\-|\×|\÷/g);
    let operators = inputString.replace(/[0-9]|\./g, "").split("");

    let divide = operators.indexOf("÷");
    while (divide !== -1) {
      numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
      operators.splice(divide, 1);
      divide = operators.indexOf("÷");
    }

    let multiply = operators.indexOf("×");
    while (multiply !== -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      operators.splice(multiply, 1);
      multiply = operators.indexOf("×");
    }

    let subtract = operators.indexOf("-");
    while (subtract !== -1) {
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf("-");
    }

    let add = operators.indexOf("+");
    while (add !== -1) {
      numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
      operators.splice(add, 1);
      add = operators.indexOf("+");
    }

    setInput(numbers[0].toString());
    setResultDisplayed(true);
  };

  const handleClearClick = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <div className="input" id="input">
        {input}
      </div>
      <div className="buttons">
        <div className="operators">
          <div onClick={() => handleOperatorClick("+")}>+</div>
          <div onClick={() => handleOperatorClick("-")}>-</div>
          <div onClick={() => handleOperatorClick("×")}>×</div>
          <div onClick={() => handleOperatorClick("÷")}>÷</div>
        </div>
        <div className="leftPanel">
          <div className="numbers">
            <div onClick={() => handleNumberClick("7")}>7</div>
            <div onClick={() => handleNumberClick("8")}>8</div>
            <div onClick={() => handleNumberClick("9")}>9</div>
          </div>
          <div className="numbers">
            <div onClick={() => handleNumberClick("4")}>4</div>
            <div onClick={() => handleNumberClick("5")}>5</div>
            <div onClick={() => handleNumberClick("6")}>6</div>
          </div>
          <div className="numbers">
            <div onClick={() => handleNumberClick("1")}>1</div>
            <div onClick={() => handleNumberClick("2")}>2</div>
            <div onClick={() => handleNumberClick("3")}>3</div>
          </div>
          <div className="numbers">
            <div onClick={() => handleNumberClick("0")}>0</div>
            <div onClick={() => handleNumberClick(".")}>.</div>
            <div id="clear" onClick={handleClearClick}>
              C
            </div>
          </div>
        </div>
        <div className="equal" id="result" onClick={handleEqualClick}>
          =
        </div>
      </div>
    </div>
  );
};

export default Calculator;
