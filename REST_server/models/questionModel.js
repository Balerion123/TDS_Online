const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide title of your question'],
  },
  question: {
    type: String,
    required: [true, 'Please enter your question'],
  },
  type: {
    type: String,
    enum: ['truth', 'situation'],
  },
  options: {
    type: [
      {
        type: String,
        required: [true, 'Please enter the option'],
      },
    ],
    validate: {
      validator: function (options) {
        return this.type === 'situation'
          ? options.length >= 2 && options.length <= 4
          : options.length === 0;
      },
      message:
        'Options must have a length between 2 and 4 for "situation" type and must be empty for "truth" type',
    },
  },
  isPublic: {
    type: 'boolean',
    default: false,
  },
});

// CREATING AN OBJECT QUESTION BASED ON THE QUESTION SCHEMA
const Question = mongoose.model('Question', questionSchema);

// EXPORTING THE QUESTION OBJECT
module.exports = Question;
