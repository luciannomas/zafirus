"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transporter = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var transporter = _nodemailer["default"].createTransport({
  host: "smtp.gmail.com",
  port: 465,
  //587
  secure: true,
  // true for 465, false for other ports
  auth: {
    user: 'luciano.mastran@gmail.com',
    // generated ethereal user
    pass: 'ssfgrhkeqwkfglhw' // generated ethereal password

  }
});

exports.transporter = transporter;
transporter.verify().then(function () {//console.log("ready for send email")
});