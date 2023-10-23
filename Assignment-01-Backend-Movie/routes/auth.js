const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/is-auth");

router.get(authMiddleware.getLogin);

module.exports = router;
