const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homepageController = require("../controllers/homepage");
const dashboardController = require("../controllers/dashboard");
const featureController = require("../controllers/features")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Homepage rendering
router.get("/", homepageController.getHomepage);
router.get("/dashboard", ensureAuth, dashboardController.getDashboard);

// Login Page
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

// Signout Page
router.get("/logout", authController.logout);

// Signup Page
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

// Feature Page
router.get("/features", featureController.getFeature);


module.exports = router;