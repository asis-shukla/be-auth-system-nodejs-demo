import mongoose from "mongoose";
const {connect} = mongoose;

import dotenv from "dotenv";
dotenv.config();

const { MONGODB_URL } = process.env;

function dbConnect() {
  connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((msg) => {
      console.log("db connection success");
    })
    .catch((err) => {
      console.log("DB connect failed", err);
      process.exit(1);
    });
}

export default dbConnect;
