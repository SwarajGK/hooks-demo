/*
  Solution for the demo5
*/

// 1
import React, { useState, useEffect } from "react";
import '../App.css';

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(count + 1);
//     }, 1000);
//     // Different id is getting generated for the interval, because it is new interavl in the end
//     console.log(id);
//     return () => clearInterval(id);
//   }, [count]);

//   return <h1>{count}</h1>;
// }


// 2
export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    // Always the same id, just added a tweak here, and telling the react 
    // to update the state from the previous one and not actually giving the value to update
    console.log(id);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}

// 3
// We can use the event bases system where we can just disptach an event which will tell that we want to
// update the store, instead of directly updaing the store
// Example: use redux or useDispatch to send and event, which will increment the state