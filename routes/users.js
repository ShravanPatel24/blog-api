const express = require("express");
const router = express.Router();
let User = require("../models/users");
// let Post = require("../models/post");
const userController = require("../controllers/userController");

router.get("/", (req, res, next) => {
  Post.find()
    .populate("user")
    .exec(function (err, result) {
      if (err) {
        return next(err);
      }
      res.render("layout", { title: "Messages", result: result });
    });
});

router.get("/login", userController.login_get);

router.post("/login", userController.login_post);

router.get("/signup", userController.signup_get);

router.post("/signup", userController.signup_post);

module.exports = router;
