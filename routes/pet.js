const express = require("express");

const router = express.Router();

const PetController = require("../controller/PetController");

router.get('/', PetController.index);
router.get("/add/:nome", PetController.add);

module.exports = router;