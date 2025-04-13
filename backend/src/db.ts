import mongoose from "mongoose";

const connectToDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/workon");
  console.log("DB connected successfully");
};

export default connectToDB;
