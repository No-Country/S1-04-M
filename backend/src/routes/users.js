const { Router } = require("express");
const router = Router();
const {
  createNewUser,
  login,
  getUsers,
  getUserById
} = require("../controllers/users.controllers");

router.route("/login").post(login);

router.route("/signup").post(createNewUser);

router.route("/logout").post((req, res) => {
  req.logOut;
  res.redirect("/");
});

router.route("/").get(getUsers);

router.route("/:id").get(getUserById);

module.exports = router;
