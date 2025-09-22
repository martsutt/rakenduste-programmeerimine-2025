import {
  Container,
  Box,
  Typography,
  Stack,
  Button,
  TextField,
} from "@mui/material"
export default function About() {
  return (
    <Container>
      <Box sx={{ p: 8 }}>
        <Stack spacing={5}>
          <Typography
            variant="h4"
            color="secondary"
          >
            About
          </Typography>
          <Typography variant="body1">
            Cras et mauris tellus. Vivamus commodo sem vel dolor congue aliquet.
            Etiam tempor, tortor sit amet suscipit fermentum, libero mi
            tincidunt lectus, at posuere nunc tellus ac dui. Vivamus convallis
            justo neque. Ut et quam convallis, posuere magna non, iaculis orci.
            Praesent velit nibh, dapibus eget libero id, varius posuere mi.
            Proin id consectetur diam, eget malesuada risus. In viverra rutrum
            nisl sed posuere. Nunc congue tellus risus, ac malesuada mauris
            eleifend eu. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Cras in viverra sem, eu malesuada
            libero. Praesent tempus massa lobortis mattis consequat. Fusce est
            quam, porta ut felis in, tempor accumsan orci. Proin sollicitudin
            elementum porttitor. Sed egestas aliquam dignissim.
          </Typography>
          <TextField
            label="About lehe textfield"
            variant="outlined"
            color="secondary"
          />
          <Button variant="contained">About lehe nupp</Button>
        </Stack>
      </Box>
    </Container>
  )
}
