//! Imported Modules
const express = require("express");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

//! Created an express app
const app = express();

//! Created a port
const port = 80;

//* Mongoose Stuff

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/contactDance");
  console.log("We are Connected");
}

//* Defining Mongoose Schema
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  concern: String,
});

const Contact = mongoose.model("contact", contactSchema);

//! Express Stuff
app.use("/static", express.static("static"));
app.use(express.urlencoded());

//! Pug Stuff
app.set("view engine", "pug"); //* Setting the template engine
app.set("views", path.join(__dirname, "views")); //* Setting the views directory

//! Endpoints
app.get("/", (req, res) => {
  const title = { title: "Rahul's Dance Academy" };
  res.status(200).render("home.pug", title);
});
app.get("/contact", (req, res) => {
  const title = { title: "Rahul's Dance Academy" };
  res.status(200).render("contact.pug", title);
});

app.post("/contact", (req, res) => {
  var myData = new Contact(req.body);
  myData
    .save()
    .then(() => {
      res.send("This item has send to database");
    })
    .catch(() => {
      res.status(400).send("Item has not been saved to database");
    });
});

//! Straing the Server
app.listen(port, () => {
  console.log(`The port is started on port ${port}`);
});
