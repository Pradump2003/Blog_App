const { Router } = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  updatedUserDetails,
  deleteUserProfile,
} = require("../controllers/user.controller");

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.patch("/update-profile", updatedUserDetails);
router.delete("/delete-profile", deleteUserProfile);

module.exports = router;
