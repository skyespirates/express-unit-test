const app = require(".");
const db = require("./utils/connectDB");

app.listen(4000, () => {
  console.log("listening on port ", 4000);
  db();
});
