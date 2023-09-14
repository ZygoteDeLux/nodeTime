const express = require("express");

const app = express();


// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Create GET request
app.get("/", (req, res) => {
    res.send("Express on Vercel");
});


const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Server failed to start", error);
        return;
    }
    console.log("Server is running on port", PORT);
});
