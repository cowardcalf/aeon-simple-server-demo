"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var _database = _interopRequireDefault(require("./database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _express["default"])(); // parse JSON (application/json content-type)

server.use(_bodyParser["default"].json());
server.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
server.get("/items", function (req, res) {
  res.json(_database["default"].movies.find());
});
server.get("/items/:id", function (req, res) {
  var itemId = req.params.id;

  var items = _database["default"].movies.find({
    id: itemId
  });

  if (items.length) {
    res.json(items);
  } else {
    res.json({
      message: "item ".concat(itemId, " doesn't exist")
    });
  }
});
server.post("/items", function (req, res) {
  var item = req.body;
  console.log('Adding new item: ', item); // add new item to db

  _database["default"].movies.save(item); // return updated list


  res.json(_database["default"].movies.find());
});
server.put("/items/:id", function (req, res) {
  var itemId = req.params.id;
  var item = req.body;
  console.log("Editing item: ", itemId, " to be ", item);

  _database["default"].movies.update({
    id: itemId
  }, item);

  res.json(_database["default"].movies.find());
});
server["delete"]("/items/:id", function (req, res) {
  var itemId = req.params.id;
  console.log("Delete item with id: ", itemId);

  _database["default"].movies.remove({
    id: itemId
  });

  res.json(_database["default"].movies.find());
});
var _default = server;
exports["default"] = _default;