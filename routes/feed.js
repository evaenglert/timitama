var express = require("express");
var router = express.Router();

const food_bowl_controller = require("../controllers/foodBowlController");

router.post("/:id", food_bowl_controller.foodbowl_update_post);

module.exports = router;
