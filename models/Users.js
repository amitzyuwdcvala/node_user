const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },

  first_name: {
    type: String,
    required: true,
  },   

  last_name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  gender: {
    type: String,
    required: true,
  },

  job_title: {
    type: String,
    required: true,
  }
});

const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;