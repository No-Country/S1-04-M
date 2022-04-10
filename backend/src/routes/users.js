const { Router } = require("express");
const router = Router();
const {
  createNewUser,
  login,
  getUsers,
} = require("../controllers/users.controllers");

// router.route('/users/login')
//     .post (passport.authenticate('local', {
//         successRedirect: "/dashboard",
//         failureRedirect: "/login",
//     }));

router.route("/login").post(login);

router.route("/signup").post(createNewUser);

router.route("/logout").post((req, res) => {
  req.logOut;
  res.redirect("/");
});

router.route("/").get(getUsers);

module.exports = router;
