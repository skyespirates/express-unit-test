const { Schema, model } = require("mongoose");

const hpSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

module.exports = model("Hp", hpSchema);
