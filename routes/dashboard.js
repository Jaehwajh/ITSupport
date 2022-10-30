const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


module.exports = router;