const Pet = require("../models/user");
const FoodBowl = require("../models/foodbowl");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {

  const foodInfo = await FoodBowl.findOne({user_id: res.locals.currentUser}).exec();

  res.render('index', {
    user: req.user,
    foodbowl: foodInfo});
})

// Display list of all pets
exports.pet_list = asyncHandler(async (req, res, next) => {
  // res.send("Not Implemented: Pet List");
  const animals = [
    { name: 'Pet 1', age: 2, species: 'Dog', image: 'animal1.jpg' },
    { name: 'Pet 2', age: 1, species: 'Cat', image: 'animal2.jpg' }
  ];

  const allPets = await Pet.find({}, "username species color")
    .exec();

  res.render('Pet_list', { animals: allPets });
})

// Display detail page for a specific Pet
exports.pet_detail = asyncHandler(async (req, res, next) => {
  res.send(`Not Implemented: Pet detail ${req.params.id}`);
})

exports.pet_create_get = asyncHandler(async (req, res, next) => {
  res.send("Not Implemented: Pet create GET");
})

exports.pet_create_post = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Pet create POST");
})

exports.pet_delete_get = asyncHandler(async (req, res, next) => {
  res.send("Not Implemented: Pet delelete GET");
});

exports.pet_delete_post = asyncHandler(async (req, res, next) => {
  res.send("Not Implemented: Pet delete POST");
})

exports.pet_update_get = asyncHandler(async (req, res, next) => {
  res.send("Not Implemented: Pet update GET");
})

exports.pet_update_post = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Update POST");
})
