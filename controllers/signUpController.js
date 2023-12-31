const User = require('../models/user');
const Color = require('../models/color');
const Species = require('../models/species');
const FoodBowl = require('../models/foodbowl');

const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");



exports.sign_up_get = asyncHandler(async (req, res, next) => {

  const [allColors, allSpecies] = await Promise.all([
    Color.find().exec(),
    Species.find().exec(),
  ])

  res.render("sign-up-form", {colors: allColors, species: allSpecies});
})

exports.sign_up_post = asyncHandler(async (req, res, next) => {
    try {
      bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        try {

          const user = new User({
            username: req.body.username,
            password: hashedPassword,
            created: new Date().toJSON(),
            species: req.body.kind,
            color: req.body.color,

          })

          const foodbowl = new FoodBowl({
            user_id: user._id,
            food_type: 'plankton',
            food_quantity: 5,
            drink_type: 'water',
            drink_quantity: 5
          })

          user.save();
          await foodbowl.save();




          res.redirect('/');

        }
        catch (err) {
          return next(err);
        }
      })
    } catch (err) {
      return next(err);
    }

  });
