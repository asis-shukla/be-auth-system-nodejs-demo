import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstname: {
    type: String,
    default: null,
  },
  lastname: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
});

export default model("user", userSchema);
