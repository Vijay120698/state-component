import React, { useState } from 'react';

const Counter = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

   
   const decrement = () => {
    setCount(count - 1);
  };

    const multiply =()=>{
        setCount(count * 2);
    };
    const divide=()=>{
        setCount(count)
    }

  return (
    <div>
      <h1>Counter( Function Component)</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment (+)</button>
      <button onClick={decrement}>Decrement (-)</button>
      <button onClick={multiply}>muliply by 2 ( * 2)</button>
      <button onclick={divide}> divide by 10(/10)</button>
    </div>
  );
};

export default Counter;
