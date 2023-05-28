const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'Please add id to your game'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  playerCount: {
    type: Number,
    required: [true, 'Enter player count between 2 and 4'],
    min: 2,
    max: 4,
  },
  players: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    validate: {
      validator: function (players) {
        return players.length <= this.playerCount;
      },
      message: 'Number of players must match player count',
    },
  },
  rounds: {
    type: Number,
    required: [true, 'A game must have a fixed number of rounds'],
    enum: [
      Array.from({ length: 8 }, (_, index) => index + 1),
      'A game may have number of rounds between 1 and 8',
    ],
  },
  currentChance: {
    type: Number,
    default: 0,
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
});

// CREATING AN OBJECT GAME BASED ON THE GAME SCHEMA
const Game = mongoose.model('Game', gameSchema);

// EXPORTING THE GAME OBJECT
module.exports = Game;
