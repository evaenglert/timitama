const User = require('../models/user');
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");



exports.sign_up_get = asyncHandler(async (req, res, next) => {
  res.render("sign-up-form");
})

exports.sign_up_post = asyncHandler(async (req, res, next) => {
    try {
      bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        try {
          const user = new User({
            username: req.body.username,
            password: hashedPassword
          })
          const result = await user.save();
          res.redirect('/');

        }
        catch (err) {
          return next(err);
        }
      })
    } catch (err) {
      return next(err);
    }

  bcrypt.hash("somePassword", 10, async (err, hashedPassword) => {
    // if err, do something
    // otherwise, store hashedPassword in DB
  });
  });
