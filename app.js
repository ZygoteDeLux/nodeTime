const express = require("express")

const app = express();
const path = require('path');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Create GET request
app.get("/", (req, res) => {
    res.send("Express on Vercel");
});


// Initialize server
const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Running on port ${port}.`);
});


// Export the Express API
module.exports = app;