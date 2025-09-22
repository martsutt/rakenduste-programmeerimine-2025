import useLocalStorage from "../useLocalStorage"
import { Box, Button, Typography } from "@mui/material"

function Dice() {
  const [dice, setDice, clearDice] = useLocalStorage<number>("diceValue", 0)

  const rollDice = () => {
    setDice(Math.floor(Math.random() * 6) + 1)
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 4,
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={rollDice}
        >
          Veereta täringut
        </Button>
        <Button
          variant="outlined"
          onClick={clearDice}
        >
          Pane täring taskusse
        </Button>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "64px" }}
          color="secondary"
        >
          {dice !== 0 ? dice : ""}
        </Typography>
      </Box>
    </>
  )
}

export default Dice
