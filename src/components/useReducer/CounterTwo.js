import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

// The ...state syntax in the reducer function is using the spread operator in JavaScript,
// which is a way to create a shallow copy of the existing state object.

// In the reducer function, you're working with an object that has multiple properties (in this case, firstCounter and secondCounter). When you want to update just one of these properties, you can use the spread operator to copy all existing properties of the state object,
// and then overwrite or add the specific property you want to change.
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>First Count - {count.firstCounter}</div>
      <div>Second Count - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment by 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement by 1
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment C2 by 1
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement C2 by 1
        </button>
      </div>
    </div>
  );
}

export default CounterTwo;
