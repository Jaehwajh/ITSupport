const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");


//.env config
require("dotenv").config({ path: "./config/.env"});

// connecting to the database
connectDB();

// Passport Config
require("./config/passport")(passport)

// EJS template
app.set("view engine", "ejs");

// Static Folder
app.use(express.static("public"));

// Body Parsing 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// logger
app.use(logger("dev"))

// Method Override implementation
app.use(methodOverride("_method"));

// Mongo Sessions
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Flash messages
app.use(flash());


// Server uptime
app.listen(process.env.PORT, () => {
    console.log("Server is up and running")
});