const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  created: {type: Date, required: true},
  species: {type: Schema.Types.ObjectId, required: true, ref: "Species"},
  color: {type: Schema.Types.ObjectId, required: true, ref: "Color"},
})

module.exports = mongoose.model("User", UserSchema);
