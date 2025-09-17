import { useState } from "react"
import "../App.css"

function Counter() {
  const [count, setCount] = useState(0)

  function changeCounter(number: number) {
    setCount(count => count + number)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => changeCounter(1)}>+1</button>
        <button onClick={() => changeCounter(25)}>+25</button>
        <button onClick={() => changeCounter(50)}>+50</button>
        <button onClick={() => changeCounter(100)}>+100</button>
        <div>count is {count}</div>
        <button onClick={() => changeCounter(-1)}>-1</button>
        <button onClick={() => changeCounter(-25)}>-25</button>
        <button onClick={() => changeCounter(-50)}>-50</button>
        <button onClick={() => changeCounter(-100)}>-100</button>
      </div>
    </>
  )
}

export default Counter
