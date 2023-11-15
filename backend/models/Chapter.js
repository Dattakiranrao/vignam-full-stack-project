const mongoose = require("mongoose");
const { Schema } = mongoose;

const chapterSchema = new Schema({
  mainName: {
    type: String,
    required: true,
  },
  chapterName: {
    type: String,
    required: true,
  },
  theory: {
    type: String,
    required: true,
  },
  simulation: {
    type: String,
  },
  doubts: {
    type: String,
  },
  className: {
    type: String,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("chapter", chapterSchema);
