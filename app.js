const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.listen(7200, () => {
  console.log("listen on port 7200");
});
