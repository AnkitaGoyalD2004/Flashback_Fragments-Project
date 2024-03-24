import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("hello");
  } catch (error) {
    return console.log(error);
  }
};

export default connectDb;
