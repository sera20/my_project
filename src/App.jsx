import { useState } from 'react';
import './App.css'; // Make sure you create an appropriate CSS file for styling

function App(){
  const [count, setCount] = useState(0);

  function hanldeIncrement(){
    setCount (count + 1);
  }
  
  function handleReset(){
    setCount(0)
  }

  function handleDecrement(){
    if (count !== 0){
      setCount(count - 1);
    }
  }
  
  return <div>
        <button onClick={handleIncrement}>Increment</button>
     <button onClick={handleReset}>Reset</button>
    <button onClick={handleDecrement}>Decrement</button>
    </div>

}

export default App;






