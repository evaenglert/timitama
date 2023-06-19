const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FoodBowlSchema = new Schema({
  user_id: {type: Schema.Types.ObjectId, ref: "User"},
  food_type: {type: String, required: true},
  food_quantity: {type: Number, required: true, max: 5, min: 0,  validate : {
    validator : Number.isInteger,
    message   : '{VALUE} is not an integer value'}
  },
  drink_type: { type: String, required: true },
  drink_quantity: {
    type: Number, required: true, max: 5, min: 0, validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'}
  }
})

module.exports = mongoose.model("FoodBowl", FoodBowlSchema);
