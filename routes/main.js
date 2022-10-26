const express = require("express");
const homepage = require("../controllers/homepage");
const router = express.Router();
const homepageController = require("../controllers/homepage");

// Homepage rendering
router.get("/", homepageController.getHomepage);


module.exports = router;