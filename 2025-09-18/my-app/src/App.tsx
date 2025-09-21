import { useState } from "react"
import "./App.css"
import Button from "@mui/material/Button"
import { Link, Outlet } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/something">Something</Link>
        <Outlet />
      </div>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <Button
          variant="outlined"
          onClick={() => setCount(count + 1)}
        >
          count is ({count})
        </Button>
      </div>
    </>
  )
}

export default App
