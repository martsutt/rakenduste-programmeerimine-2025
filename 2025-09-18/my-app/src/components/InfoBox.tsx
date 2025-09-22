import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
} from "@mui/material"

function InfoBox() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">Martin Sütt</Typography>
        <Typography variant="body1">Hobid:</Typography>
        <List>
          <ListItem>Arvutimängud</ListItem>
          <ListItem>Korvpall</ListItem>
          <ListItem>Ujumine</ListItem>
        </List>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            label="E-mail"
            variant="outlined"
          />
          <TextField
            label="Sõnum"
            variant="outlined"
          />
          <Button variant="contained">Saada</Button>
        </Box>
      </Box>
    </>
  )
}

export default InfoBox
