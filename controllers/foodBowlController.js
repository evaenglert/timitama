const FoodBowl = require("../models/foodbowl");
const Pet = require("../models/user");
const asyncHandler = require("express-async-handler");

exports.foodbowl_update_get = asyncHandler(async (req, res, next) => {
  res.send("Not Implemented Yet: Food update GET");
});

exports.foodbowl_update_post = asyncHandler(async (req, res, next) => {

    const curr_foodbowl = await FoodBowl.findById(req.params.id).exec();
    console.log(curr_foodbowl);

    // Create a Book object with escaped/trimmed data and old id.
    const foodbowl = new FoodBowl({
      user_id: res.locals.currentUser,
      food_quantity: curr_foodbowl.food_quantity + parseInt(req.body.food, 10),
      drink_quantity: curr_foodbowl.drink_quantity + parseInt(req.body.drink, 10),
      _id: req.params.id,
    });

    await FoodBowl.findByIdAndUpdate(req.params.id, foodbowl, {});
    res.redirect('/');


})
