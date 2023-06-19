const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ColorSchema = new Schema({
  name: {type: String, required: true, maxLength: 30},
})

module.exports = mongoose.model("Color", ColorSchema);
