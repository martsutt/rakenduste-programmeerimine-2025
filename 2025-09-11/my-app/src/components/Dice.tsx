import { useState } from "react"
import "./Dice.css"
function Dice() {
  const [dice, setDice] = useState(0)
  const rollDice = () => {
    setDice(Math.floor(Math.random() * 6) + 1)
  }

  return (
    <>
      <div className="dice-container">
        <button onClick={rollDice}>Veereta täringut</button>
        <div className="dice">{dice !== 0 ? dice : ""}</div>
      </div>
    </>
  )
}

export default Dice
