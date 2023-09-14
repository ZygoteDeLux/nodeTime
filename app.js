const express = require("express");
const app = express();
const PORT = 8080;

let fetch;

import('node-fetch').then(module => {
  fetch = module.default;
});

// Create GET request
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});

app.get('/getQuote', async (req, res) => {
    try {
      const response = await fetch('https://zenquotes.io/api/random');
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });


app.listen(PORT, (error) => {
    if (error) {
        console.log("Server failed to start", error);
        return;
    }
    console.log("Server is running on port", PORT);
});

module.exports = app;