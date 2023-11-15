const mongoose = require("mongoose");
const { Schema } = mongoose;

const subjectSchema = new Schema({
  subjectName: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("subject", subjectSchema);
