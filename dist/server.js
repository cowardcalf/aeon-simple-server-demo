"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _aeonServices = _interopRequireDefault(require("./aeonServices"));

var _sampleServices = _interopRequireDefault(require("./sampleServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _express["default"])(); // parse JSON (application/json content-type)

server.use(_bodyParser["default"].json()); // Enable the CORS

server.use((0, _cors["default"])()); // Note: the server object will be changed
// in these get services calls

(0, _sampleServices["default"])(server);
(0, _aeonServices["default"])(server);
var _default = server;
exports["default"] = _default;