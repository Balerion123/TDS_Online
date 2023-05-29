const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide your username'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide your password'],
  },
  questions: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
      },
    ],
    default: [],
  },
});

// CREATING AN OBJECT USER BASED ON THE USER SCHEMA
const User = mongoose.model('User', userSchema);

// EXPORTING THE USER OBJECT
module.exports = User;
