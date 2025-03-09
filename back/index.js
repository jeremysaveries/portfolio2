import express from "express";
import "dotenv/config";
const app = express();

const port = 4001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
