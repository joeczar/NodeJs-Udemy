/*jshint esversion: 6 */
const path = require("path");
const express = require("express");

const app = express();
console.log(__dirname);
console.log(path.join(__dirname, "../public"));
const publicDir = path.join(__dirname, "../public");

app.set("view engine", "hbs");
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
