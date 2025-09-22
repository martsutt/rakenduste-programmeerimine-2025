import "./App.css"
import { Button, AppBar, Toolbar, Box } from "@mui/material"
import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <>
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
    </>
  )
}

export default App
