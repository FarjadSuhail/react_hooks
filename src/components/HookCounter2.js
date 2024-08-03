import React, { useState } from "react";

function HookCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(0);

  //   In React, state updates using the useState hook are asynchronous and are batched for performance reasons.
  //  This means that multiple calls to setCount within the same synchronous event handler do not immediately update the count state.
  // When setCount is called, it schedules an update to the state, but it does not update the state immediately. Instead, it queues the updates, and the state is only updated after the function completes. As a result, the count variable retains its initial value throughout the loop, leading to only a single increment

  //   const incrementFive = () => {
  //     for (let i = 0; i < 5; i++) {
  //       setCount(count + 1);
  //     }
  //   };

  // In this revised code, setCount(prevCount => prevCount + 1) ensures that the count is incremented correctly by taking the previous count value for each iteration of the loop, resulting in a total increment of 5 as intended.
  // Anytime we need to update the state value based on the prev value use this way, as it is safer
  // pass in a function that will set the new value
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment Count
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement Count
      </button>
      <button onClick={() => setCount(initialCount)}>Reset Count</button>
      <button onClick={incrementFive}>Increment By 5</button>
    </div>
  );
}

export default HookCounter2;
