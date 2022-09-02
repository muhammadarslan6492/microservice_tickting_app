import mongoose from "mongoose";

import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  try {
    await mongoose.connect(
      "mongodb+srv://muhammadarslan:vjTs9wzRrFuWUBBU@cluster0.uxxcz.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`App running on port ${process.env.PORT}`);
  });
};

start();
