"use strict";

require("regenerator-runtime");
require("dotenv/config");
require("./db");
require("./models/Video");
require("./models/User");
require("./models/Comment");
var _server = _interopRequireDefault(require("./server"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PORT = process.env.PORT || 4000;
var handleListening = function handleListening() {
  return console.log("\u2705 Server listenting on http://localhost:".concat(PORT, " \uD83D\uDE80"));
};
_server["default"].listen(PORT, handleListening);