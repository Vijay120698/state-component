import React, { useState } from 'react';

const EventHandling = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event);
    console.log(event.target.value);
  };

  const handleClick = () => {
    alert(`Input Value: ${inputValue}`);
  };

  return (
    <div>
      <h1>Event Handling in React</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>Show Input</button>
    </div>
  );
};

export default EventHandling;
