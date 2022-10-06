const express = require('express');
  
const app = express();

// error handler
app.get("/", (req, res) => {
  res.json({ "message": "welcome" })
})
app.post("/", (req, res) => {
  res.json({ "message": "welcome" })
})

app.get("/ping", (req, res) => {
  res.json({ "message": "welcome" })
})



app.listen(80, () => console.log("server has started on " + 80))
module.exports = app;
