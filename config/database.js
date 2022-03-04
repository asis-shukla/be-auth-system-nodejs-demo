const mongoose = require("mongoose");
const { MONGODB_URL } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((msg) => {
      console.log("db connection success", msg);
    })
    .catch((err) => {
      console.log("DB connect failed", err);
      process.exit(1);
    });
};
