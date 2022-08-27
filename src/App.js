import React, {useState} from 'react';
import './App.css';


const Counter = () => {
  const handleClick = () =>{
    setCount(count + 1);
  }
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <p>{count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  ) 
}

export default Counter;
