const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

//CRUD endpointide näited

app.post("/players", (req, res) => {
  res.send("New player added: " + JSON.stringify(req.body))
})

app.post("/games", (req, res) => {
  res.send("New game added: " + JSON.stringify(req.body))
})

app.get("/players", (req, res) => {
  res.send("All of the added players: ")
})

app.get("/games", (req, res) => {
  res.send("All of the added games: ")
})

app.put("/players/:id", (req, res) => {
  res.send(
    "Player ID: " +
      req.params.id +
      " details updated: " +
      JSON.stringify(req.body),
  )
})

app.put("/games/:id", (req, res) => {
  res.send(
    "Game ID: " +
      req.params.id +
      " details updated : " +
      JSON.stringify(req.body),
  )
})

app.delete("/players/:id", (req, res) => {
  res.send("Player ID: " + req.params.id + " deleted")
})

app.delete("/games/:id", (req, res) => {
  res.send("Game ID: " + req.params.id + " deleted")
})

//Route parameters näited

app.get("/players/:playerId/items/:itemId", (req, res) => {
  res.send({
    playerId: req.params.playerId,
    itemId: req.params.itemId,
  })
})

app.get("/games/:from-:to", (req, res) => {
  res.send({
    from: req.params.from,
    to: req.params.to,
  })
})

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT)
})
