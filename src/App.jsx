import { useState } from 'react';
import './App.css'; // Make sure you create an appropriate CSS file for styling

const App = () => {
  // State initialization
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('');

  // Function to handle the operation type
  const handleOperation = (op) => {
    setOperation(op);
  };

  // Function to calculate the result
  const calculateResult = () => {
    let calcResult;
    switch (operation) {
      case '+':
        calcResult = num1 + num2;
        break;
      case '-':
        calcResult = num1 - num2;
        break;
      case '*':
        calcResult = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          calcResult = num1 / num2;
        } else {
          calcResult = 'Error: Division by zero';
        }
        break;
      default:
        calcResult = null;
    }
    setResult(calcResult);
  };

  // Function to reset the inputs and result
  const handleReset = () => {
    setNum1(0);
    setNum2(0);
    setResult(null);
    setOperation('');
  };

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
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('/')}>/</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={handleReset} className="reset-button">C</button>
      </div>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
};

export default App;






