import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (error) {
    return console.log(error);
  }
};

export default connectDb;
