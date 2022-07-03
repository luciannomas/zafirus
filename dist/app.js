"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//TODO: INIT APP
var app = (0, _express["default"])(); // createRoles();
//Setting

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); // for form

app.use((0, _cors["default"])()); // Init port

app.set('port', process.env.PORT || 3001); // Method with seting the var / const
//TODO: Routes

app.use('/users', _user["default"]);
var _default = app;
exports["default"] = _default;