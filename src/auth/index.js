const passport = require("passport");
const strategy = require("./strategy");
const users = require("./users");

passport.use(strategy);

passport.serializeUser((user, done) => {
	done(null, user.username);
});

passport.deserializeUser((username, done) => {
	done(null, users[username]);
});

module.exports = () => [
	passport.initialize(),
	passport.session()
];
