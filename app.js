const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Tomar café", "Aulas de node"];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("pt-BR", options);
  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", (req, res) => {
  items.push(req.body.newItem);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
