import {
  Container,
  Box,
  Typography,
  Stack,
  Button,
  TextField,
} from "@mui/material"
export default function Home() {
  return (
    <Container>
      <Box sx={{ p: 8 }}>
        <Stack spacing={5}>
          <Typography variant="h4">Home</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            commodo sapien non turpis placerat, in porta velit imperdiet.
            Vivamus sollicitudin, risus at imperdiet pulvinar, nibh elit
            malesuada magna, quis pulvinar justo ante eget leo. Etiam in lacus
            bibendum est convallis eleifend nec non magna. Integer eu risus in
            enim consequat pretium sed in eros. Praesent non mi a ipsum cursus
            tincidunt ac dictum odio. Vestibulum ut tellus porta felis accumsan
            malesuada. Curabitur eleifend ante eu augue tempus scelerisque.
            Phasellus nec interdum eros. Aliquam euismod eget nibh eget blandit.
            Quisque hendrerit sapien malesuada erat facilisis, vitae rhoncus
            urna vehicula. Suspendisse ac erat a nibh dignissim porttitor. Ut
            vitae cursus ante. Fusce ornare erat a magna tristique, sagittis
            dignissim risus consequat.
          </Typography>
          <TextField
            label="Home lehe textfield"
            variant="outlined"
          />
          <Button variant="contained">Home lehe nupp</Button>
        </Stack>
      </Box>
    </Container>
  )
}
