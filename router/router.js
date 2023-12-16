const express = require("express");
const router = express.Router();
const controller = require("../controller/User/userControle");

router.get("/api/users", controller.getProfiles);
router.get("/api/users/:username/details", controller.getUserDetails);
router.get("/api/users/:username/repos", controller.getUserRepos);

module.exports = router;
