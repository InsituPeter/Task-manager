import mongoose,{ connect } from "mongoose";

const connectDB = async (url) => {
 mongoose.connection.on("disconected", () => {
  console.log("mongoDB disconnected");
 });

 mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
 });

 await connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
     });
     return console.log("DB connected sucessfully");
};
export default connectDB;
