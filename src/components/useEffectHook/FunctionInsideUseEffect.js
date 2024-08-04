import React, { useState, useEffect } from "react";

function FunctionInsideUseEffect() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // if we want to call a function from the useEffect
    // be mindful of the props and specifying them in the dependency array
    function doSomething() {
      console.log(someProps);
    }
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count, someProps]);
  return <div>{count}</div>;
}

export default FunctionInsideUseEffect;
