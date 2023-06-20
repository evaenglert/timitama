const FoodBowl = require("../models/foodbowl");
const Pet = require("../models/user");
const asyncHandler = require("express-async-handler");

exports.foodbowl_update_get = asyncHandler(async (req, res, next) => {
  res.send("Not Implemented Yet: Food update GET");
});

exports.foodbowl_update_post = asyncHandler(async (req, res, next) => {
  res.send("Not implemented yet: Food update POST");
})
