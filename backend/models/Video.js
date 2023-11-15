const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoSchema = new Schema({
  link: {
    type: String,
  },
  className: {
    type: String,
  },
  subjectName: {
    type: String,
  },
});

module.exports = mongoose.model("video", videoSchema);
