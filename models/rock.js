const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RockSchema = new Schema({
  user_name: {type: String, required: true, maxLength: 100},
  created: {type: Date},
  gender: {type: String, required: true, maxLength: 10}
})


RockSchema.virtual("url").get(function() {
  return `/catalog/rock/${this._id}`;
})

module.exports = mongoose.model("Rock", RockSchema);
