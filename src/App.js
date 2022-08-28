import React, {useState} from 'react';
import './App.css';


const Counter = () => {
  const handleIncrement = () =>{
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount(count - 1);
  }
  const handleReset = () => {
    setCount(0);
  }
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  ) 
}

export default Counter;
