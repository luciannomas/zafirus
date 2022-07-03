"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var UsersSchema = new _mongoose.Schema({
  /* id: { type: Number, unique: true}, */
  name: {
    type: String,
    required: [true, "The Task title is required "],
    unique: true,
    trim: true,
    maxlength: [40, "title cannot be grater than 40 characters"]
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [200, "title cannot be grater than 200 characters"]
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20, "title cannot be grater than 20 characters"]
  },
  certificates: {
    type: Array,
    required: true
  },
  work_experiences: {
    type: Array,
    required: true
  },
  links: {
    type: Object,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = _mongoose.models.Task || (0, _mongoose.model)("Users", UsersSchema);

exports["default"] = _default;