const express = require("express");
const passport = require("passport");

const router = express.Router();

router.route("/")
	.get((req, res) => {
		res.redirect(308, "/auth");
	});

router.route("/auth")
	.get((req, res) => {
		if (!req.isAuthenticated())
			return res.status(401).send(`
				<form method="POST" action"/auth">
					<p>
						<span>Username:</span>
						<br>
						<input type="text" name="username">
					</p>
					<p>
						<span>Password:</span>
						<br>
						<input type="password" name="password">
					</p>
					<div class="buttons">
						<button type="submit">Log in</button>
					</div>
				</form>
			`);

		res.json(req.user);
	})
	.post(
		passport.authenticate('local'),
		(req, res) => {
			res.redirect("/auth");
		},
	)
	.delete((req, res) => {
		req.logout();
		res.redirect("/auth");
	});

module.exports = router;
