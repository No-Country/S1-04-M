const {
  Router
} = require("express");

const router = Router();

const {
  createNewUser,
  login,
  getUsers,
  getUserById,
  deleteUsers
} = require("../controllers/users.controllers");

router.route("/login").post(login);
router.route("/signup").post(createNewUser);
router.route("/logout").post((req, res) => {
  req.logOut;
  res.redirect("/");
});
router.route("/").get(getUsers); // .delete(deleteUsers)

router.route("/:id").get(getUserById);
module.exports = router;