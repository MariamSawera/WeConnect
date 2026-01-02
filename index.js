const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth")


const app = express(); // create sever to attach routes
app.use(cors()); //middleware allow cross-origin requests
app.use(express.json()); //middleware  parse json bodies
app.use("/auth", authRoutes);

app.get("/", (req,res) => {
    res.send("backend running"); //callback runs when someone visits "/"
});


app.listen(5000, () => {
    console.log("server running on port 5000"); //callback runs when server starts
});


//steps 
//create server object
//add middlewares 
//define routes
//start listening