"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)(); // llamo a la funcion para que cargue la variable de entorno
//exporto un objeto

var _default = {
  mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/eccomerce',
  secret: process.env.SECRET
};
exports["default"] = _default;