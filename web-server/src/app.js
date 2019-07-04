/*jshint esversion: 6 */
const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for express config
const publicDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "../templates/views");
const partialsDir = path.join(__dirname, "../templates/partials");

// Set up Handlebars engine and views
app.set("view engine", "hbs");
app.set("views", viewsDir);
hbs.registerPartials(partialsDir);

// Setup Static Directory to serve
app.use(express.static(publicDir));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Joe Czarnecki"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Joe Czarnecki"
  }); 
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Joe Czarnecki",
    helpMessage: "Only you can help yourself."
  });
});

app.get("/weather", (req, res) => {
  res.send({
    location: "Berlin, Germany",
    forecast: "Es is 20 grad und sonnig"
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
