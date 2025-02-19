import { useState } from 'react';
import './App.css'; 

const App = () = > {
  const [n1, n2] = useState(0);

  function Caloperation() {
    if 

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





