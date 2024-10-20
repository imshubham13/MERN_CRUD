const mongoose = require("mongoose");
const signup = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  sign_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('student_master',signup)