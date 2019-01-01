const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(7200, () => {
  console.log("listen on port 7200");
});

socketio(expressServer);
