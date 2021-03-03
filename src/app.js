const express = require("express");
const session = require("express-session");
const auth = require("./auth");
const router = require("./router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
	secret: "my secret!!1",
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 60_000,
	},
}));
app.use(auth());

app.use("/", router);

module.exports = app;
