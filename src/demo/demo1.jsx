/*
  What should it print if I click on the click me button 3 times then click on handleAlertClick and
  then on Click me before it time out is set

  Expeccted result => 
  Real result => 
*/

import React, { useState } from 'react';
import '../App.css';

export default function Demo() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert('You clicked on: ' + count);
    }, 3000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleAlertClick}>
        Show alert
      </button>
    </div>
  );
}