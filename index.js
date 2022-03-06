import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
const { PORT } = process.env;

app.listen(PORT, (req, res) => {
  console.log(`listing on port ${PORT}`);
});
