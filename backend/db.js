const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://Datta:Datta.123@cluster0.lyewcpb.mongodb.net/Vignam_Database";

const connectToMongo = async () => {
  mongoose.connect(mongoURI).then(() => console.log("Connected To Database")).catch(error => console.log(error));
}
module.exports = connectToMongo;
