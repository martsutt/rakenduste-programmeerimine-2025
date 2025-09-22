import { Container, Box } from "@mui/material"
import InfoBox from "../components/InfoBox"
import Counter from "../components/Counter"
import Dice from "../components/Dice"

export default function Something() {
  return (
    <Container>
      <Box sx={{ p: 8 }}>
        <InfoBox />
        <Counter />
        <Dice />
      </Box>
    </Container>
  )
}
