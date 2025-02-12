import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  function handleIncrement(){
    setCount(count + 1);
  }  

  function handleReset(){
    setCount(0)
  }

  function handleDecrement(){
    if(count != 0){
      setCount(count - 1);
    }
  }

  return <div>
    <h1 className="number-label">The Number: { count } </h1>
    <button className="increment-button" onClick={handleIncrement}>Increment</button>
    <button className="reset-button" onClick={handleReset}>Reset</button>
    <button className="decrement-button" onClick={handleDecrement}>Decrement</button>

  </div>
 
}

export default App;
