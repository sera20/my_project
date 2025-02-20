import { useState } from 'react';
import './App.css'; // Import external CSS file

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);

  function handleOperation(op) {
    setOperation(op);
  }

  function calculateResult() {
    if (operation && num1 !== "" && num2 !== "") {
      const n1 = Number(num1);
      const n2 = Number(num2);
      let res = null;

      switch (operation) {
        case "+":
          res = n1 + n2;
          break;
        case "-":
          res = n1 - n2;
          break;
        case "*":
          res = n1 * n2;
          break;
        case "/":
          res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
          break;
        default:
          res = "Invalid operation";
      }

      setResult(res);
    }
  }

  function handleReset() {
    setNum1("");
    setNum2("");
    setOperation(null);
    setResult(null);
  }

  return (
    <div className="calculator-container">
      <h1>Basic Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        className="input-field"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        className="input-field"
      />
      <div className="button-container">
        <button onClick={() => handleOperation("+")}> + </button>
        <button onClick={() => handleOperation("-")}> - </button>
        <button onClick={() => handleOperation("*")}> * </button>
        <button onClick={() => handleOperation("/")}> / </button>
        <button onClick={calculateResult}>=</button>
        <button onClick={handleReset} className="reset-button"> C </button>
      </div>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;

