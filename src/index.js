var express = require("express");
require("./config/dbConnect");
var app = express();
app.use(express.json());


// importing route
const employeeRouter = require("./routes/employee");
app.use(employeeRouter);

app.get("/", function (req, res) {
  return res.send("hello");
});
app.listen(3000, () => {
  console.log(`Server is up on port 3000`);
});
module.exports = app;
