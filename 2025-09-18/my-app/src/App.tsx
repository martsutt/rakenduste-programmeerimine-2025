import "./App.css"
import { Button, AppBar, Toolbar, Box } from "@mui/material"
import { Link, Outlet } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#00360B",
    },
    secondary: {
      main: "#FF9200",
    },
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Button
                component={Link}
                to="/"
                color="inherit"
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/about"
                color="inherit"
              >
                About
              </Button>
              <Button
                component={Link}
                to="/something"
                color="inherit"
              >
                Something
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Box sx={{ p: 2 }}>
          <Outlet />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
