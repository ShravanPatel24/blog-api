const User = require("../models/users");
const passport = require("../passport");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

exports.login_get = (req, res) => {
  res.render("login");
};

exports.login_post = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
});

exports.signup_get = function (req, res, next) {
  res.render("signup", { title: "Signup Form", msg: " " });
};

exports.signup_post = [
  body("username").trim().isLength({ min: 1 }).escape(),

  (req, res, next) => {
    const errors = validationResult(req);

    let user = new User({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    });

    if (!errors.isEmpty()) {
      res.render("signup", {
        title: "SignUp",
        msg: " ",
        errors: errors.array(),
      });
      return;
    }
    if (req.body.password != req.body.confirm_pw) {
      res.render("signup", {
        title: "SignUp",
        msg: "Password not matched with confirmPassword",
      });
      return;
    }

    User.findOne({ username: user.username }).exec(function (err, result) {
      if (result) {
        res.render("signup", { title: "SignUp", msg: "Username taken" });
        return;
      } else {
        user.save(function (err) {
          if (err) {
            next(err);
          }
          res.redirect("/users/login");
        });
      }
    });
  },
];
