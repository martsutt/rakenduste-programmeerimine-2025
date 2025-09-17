import { useState } from "react"
import "../App.css"

function Counter() {
  const [count, setCount] = useState(0)

  function increaseCounter(number: number) {
    setCount(count => count + number)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => increaseCounter(10)}>count is {count}</button>
      </div>
    </>
  )
}

export default Counter
