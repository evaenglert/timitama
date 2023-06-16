const Rock = require("../models/rock");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  // res.send("Not Implemented: Rock Index");
  // res.sendFile(path.join(__dirname, 'public', 'index.html'));
  res.render('index', {
    // username: 'Owner A',
    // email: 'email@email.com',
    // accountType: 'Simple',
    user: req.user});
})

// Display list of all Rocks
exports.rock_list = asyncHandler(async (req, res, next) => {
  // res.send("Not Implemented: Rock List");
  const animals = [
    { name: 'Rock 1', age: 2, species: 'Dog', image: 'animal1.jpg' },
    { name: 'Rock 2', age: 1, species: 'Cat', image: 'animal2.jpg' }
  ];

  const allRocks = await Rock.find({}, "user_name gender")
    .exec();

  res.render('rock_list', { animals: allRocks });
})

// Display detail page for a specific Rock.
exports.rock_detail = asyncHandler(async (req, res, next) => {
  res.send(`Not Implemented: Rock detail ${req.params.id}`);
})

exports.rock_create_get = asyncHandler(async (req, res, next) => {
  res.send("Not Implemented: Rock create GET");
})

exports.rock_create_post = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Rock create POST");
})

exports.rock_delete_get = asyncHandler(async (req, res, next) => {
  res.send("Not Implemented: Rock delelete GET");
});

exports.rock_delete_post = asyncHandler(async (req, res, next) => {
  res.send("Not Implemented: Rock delete POST");
})

exports.rock_update_get = asyncHandler(async (req, res, next) => {
  res.send("Not Implemented: Rock update GET");
})

exports.rock_update_post = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Update POST");
})
