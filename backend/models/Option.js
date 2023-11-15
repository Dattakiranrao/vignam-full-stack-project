const mongoose = require("mongoose");
const { Schema } = mongoose;

const optionSchema = new Schema({
  opt: {
    type: String,
    required: true,
  },
  questionNumber: {
    type: String,
    require: true,
  },
  className: {
    type: String,
  },
  subjectName: {
    type: String,
  },
  isTrue: Boolean,
});

module.exports = mongoose.model("option", optionSchema);
