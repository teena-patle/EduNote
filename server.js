const express = require("express");
const app = express();
const session = require("express-session");
const db = require("./config/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
   secret: "edunote_secret_key",
   resave: false,
   saveUninitialized: true
}));

app.set("view engine", "ejs");

// Routes
app.use("/", require("./routes/auth"));
app.use("/classroom", require("./routes/classroom"));
app.use("/notes", require("./routes/notes"));

app.get("/", (req,res) => res.redirect("/login"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT));
