"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _diskdb = _interopRequireDefault(require("diskdb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_diskdb["default"].connect('./data', ['movies', 'aeonTimeline']);

if (!_diskdb["default"].movies.find().length) {
  var movie = {
    id: "tt0110357",
    name: "The Lion King",
    genre: "animation"
  };

  _diskdb["default"].movies.save(movie);
}

console.log(_diskdb["default"].movies.find());
var _default = _diskdb["default"];
exports["default"] = _default;