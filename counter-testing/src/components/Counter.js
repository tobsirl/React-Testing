import React, {useState} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  function decrement() {
    setCount((c) => c - 1)
  }

  function increment() {
    setCount((c) => c + 1)
  }

  function reset() {
    setCount(0)
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
