const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SpeciesSchema = new Schema({
  name: { type: String, required: true, maxLength: 50 },
})

module.exports = mongoose.model("Species", SpeciesSchema);
