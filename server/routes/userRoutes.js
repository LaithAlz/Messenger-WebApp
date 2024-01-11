const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  allUsers,
  changePassword,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);
router.route("/password").put(protect, changePassword);

module.exports = router;
