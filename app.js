const express = require("express")

const app = express();
const path = require('path');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");

});


const PORT = 8080;

app.listen(PORT, () =>{

    console.log("Server is running", PORT);

});