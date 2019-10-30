"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _database = _interopRequireDefault(require("./database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAeonServices = function getAeonServices(server) {
  server.get("/aeon", function (req, res) {
    res.json(_database["default"].aeonTimeline.find());
  });
  server.get("/aeon/:id", function (req, res) {
    var configId = req.params.id;

    var configs = _database["default"].aeonTimeline.find({
      id: configId
    });

    if (configs.length) {
      res.json(configs[0]);
    } else {
      res.json({
        message: "config ".concat(configId, " doesn't exist")
      });
    }
  });
  server.post("/aeon", function (req, res) {
    var config = req.body;
    console.log('Adding new config: ', config); // add new config to db

    _database["default"].aeonTimeline.save(config); // return updated list


    res.json(_database["default"].aeonTimeline.find());
  });
  server.put("/aeon/:id", function (req, res) {
    var configId = req.params.id;
    var config = req.body;
    console.log("Editing config: ", configId, " to be ", config);

    _database["default"].aeonTimeline.update({
      id: configId
    }, config);

    res.json(_database["default"].aeonTimeline.find());
  });
  server["delete"]("/aeon/:id", function (req, res) {
    var configId = req.params.id;
    console.log("Delete config with id: ", configId);

    _database["default"].aeonTimeline.remove({
      id: configId
    });

    res.json(_database["default"].aeonTimeline.find());
  });
  return server;
};

var _default = getAeonServices;
exports["default"] = _default;