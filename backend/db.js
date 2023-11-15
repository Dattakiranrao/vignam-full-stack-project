const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/Vignam";

const connectToMongo = async () => {
  mongoose.connect(mongoURI).then(() => console.log("Connected To Database")).catch(error => console.log(error));
}
module.exports = connectToMongo;
