import { useState } from "react"
import { Box, Button, Typography } from "@mui/material"
import "../App.css"

function Counter() {
  const [count, setCount] = useState(0)

  function changeCounter(number: number) {
    setCount(count => count + number)
  }

  return (
    <>
      <Typography variant="h6">Counter</Typography>
      <Box className="card">
        <Button onClick={() => changeCounter(1)}>+1</Button>
        <Button onClick={() => changeCounter(25)}>+25</Button>
        <Button onClick={() => changeCounter(50)}>+50</Button>
        <Button onClick={() => changeCounter(100)}>+100</Button>
        <Typography>count is {count}</Typography>
        <Button onClick={() => changeCounter(-1)}>-1</Button>
        <Button onClick={() => changeCounter(-25)}>-25</Button>
        <Button onClick={() => changeCounter(-50)}>-50</Button>
        <Button onClick={() => changeCounter(-100)}>-100</Button>
      </Box>
    </>
  )
}

export default Counter
