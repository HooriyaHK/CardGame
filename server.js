// This is the start of a backend server. We will write server-side code here
// all sources use dto write this are in notes.txt

// This is a node package that will help us create a server
const express = require("express");
const path = require("path");

// This is the main app. Apps can get complicated. For now, think of it as a place to store server-side methods.
// We will access server-side methods via routes, which are URLs (like http://localhost:8000/number or http://yorku.ca/somename)
const app = express();

// This is the networking port we are going to listen on. 
// Backend programs listen on networking ports to get information from other computers
const PORT = 8000;

// Middleware to serve static files // sources in notes.txt
app.use(express.static(path.join(__dirname)));

// Route for  the home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Route for single player game
app.get("/single", (req, res) => {
    res.sendFile(path.join(__dirname, "single.html"));
});

// Route for multiplayer game
app.get("/multi", (req, res) => {
    res.sendFile(path.join(__dirname, "multi.html"));
});

// Route for single result
app.get("/resultSingle", (req, res) => {
    res.sendFile(path.join(__dirname, "resultSingle.html"));
});

// Route for multiplayer result
app.get("/resultMulti", (req, res) => {
    res.sendFile(path.join(__dirname, "resultMulti.html"));
});

// Servers listen for interactions and requests.
// Our app sits and waits for requests to come in.
// These requests can be from browsers, or other computers in the cloud. Could be your smartwatch?
// Your fridge, your robot dog?
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});
