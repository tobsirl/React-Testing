import React, { useState, useReducer } from 'react';
import './Counter.css';

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        count: state.count + parseInt(action.step),
      };
    }
    case 'DECREMENT': {
      return {
        count: state.count - action.step,
      };
    }
    case 'RESET': {
      return {
        count: 0,
      };
    }

    default:
      throw new Error(`Unsupported type: ${action.type}`);
  }
}
export default function Counter({ initialState = 0 }) {
  const [state, dispatch] = useReducer(countReducer, { count: initialState });
  const [step, setStep] = useState(1);

  function increment() {
    dispatch({ type: 'INCREMENT', step: step });
  }

  function decrement() {
    dispatch({ type: 'DECREMENT', step: step });
  }

  function reset() {
    dispatch({ type: 'RESET' });
  }

  function handleChange(event) {
    const value = event.target.value;
    setStep(value);
  }

  const { count } = state;

  return (
    <div>
      <h1>My Counter</h1>
      <h1 className={`${count >= 100 ? 'green' : ''}${count < 0 ? 'red' : ''}`}>
        {count}
      </h1>

      <button onClick={decrement}>-</button>
      <input type="number" value={step} onChange={handleChange} />
      <button onClick={increment}>+</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}
