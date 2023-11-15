const mongoose = require("mongoose");
const { Schema } = mongoose;
const Option = require("./Option.js");
const optionSchema = require("mongoose").model("option").schema;

const questionSchema = new Schema({
  question: {
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
});

module.exports = mongoose.model("questions", questionSchema);
