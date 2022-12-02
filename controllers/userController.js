const passport = require("passport");
const User = require("../models/users");

exports.get_user = function (req, res, next) {
  User.find()
    .sort([["username", "ascending"]])
    .exec((err, users) => {
      if (err) res.json(err);

      res.json(users);
    });
};

exports.login_post = function (req, res, next) {
  passport.authenticate("local");
};
