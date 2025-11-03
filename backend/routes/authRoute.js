const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile
} = require("../controllers/authController");

// Import middleware
// Make sure this is exported as: module.exports = { protect }
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

// Debugging - detect if something is undefined
if (!registerUser || !loginUser || !getUserProfile || !protect) {
  console.error("❌ One or more route handlers are undefined in authRoute.js");
  console.error({
    registerUser,
    loginUser,
    getUserProfile,
    protect
  });
  throw new Error("Route handler/middleware not loaded correctly. Check your exports/imports.");
}

// Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);



module.exports = router;
