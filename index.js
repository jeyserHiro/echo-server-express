const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all("/", (req, res) => {
  res.json({ "message": "welcome" })
})

app.all("/ping", (req, res) => {
  res.json({ "message": "thanks for pinging" })
})

app.all("/health", (req, res) => {
  res.json({ "message": "healthy" })
})

app.all("/body", (req, res) => {
  let data = req.body ?? { "error": "no body found" }
  res.json(data)
})

app.get("/date", (req, res) => {
  res.json({date:new Date() })
})

app.listen(80, () => console.log("server has started on " + 80))
module.exports = app;
