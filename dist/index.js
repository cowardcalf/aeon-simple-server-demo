"use strict";

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = 4000;

_server["default"].listen(port, function () {
  console.log("Server listening at ".concat(port));
});