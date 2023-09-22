const express = require("express");

const myController = require("../controllers/index");

const router = express.Router();

router.get("/", myController.getData);

module.exports = router;
