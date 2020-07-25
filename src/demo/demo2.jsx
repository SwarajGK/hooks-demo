/*
  What should it print? Is each effect is new for each render or it return the latest values of the count?

  Expected result => 
  Real result =>
*/
import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}