const User = require('../models/userModel');
const Question = require('../models/questionModel');
const Game = require('../models/gameModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

function generateCode() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }

  return code;
}

// ROUTE TO PUT USER ID IN PARAMS
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

// ROUTE TO GET A USER
exports.getMyDetails = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    user,
  });
});

// ROUTE TO CHANGE USERNAME
exports.changeUsername = catchAsync(async (req, res, next) => {
  const { username } = req.body;

  if (!username) return next(new AppError('Please send new username', 400));

  await User.findByIdAndUpdate(
    req.params.id,
    {
      username: username,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: 'success',
    message: `new username is now ${username}`,
  });
});

// ROUTE TO CREATE NEW QUESTION
exports.createQuestion = async (req, res, next) => {
  try {
    const { title, question, type, options, isPublic } = req.body;

    const newQuestion = await Question.create({
      title,
      question,
      type,
      options,
      isPublic,
    });

    await User.findByIdAndUpdate(
      req.params.id,
      { $push: { questions: newQuestion._id } },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      status: 'success',
      message: 'question successfully created',
    });
  } catch (err) {
    console.log(err.message);
    return next(new AppError(err.message, 400, res));
  }
};

// ROUTE TO CREATE A NEW GAME
exports.createGame = async (req, res, next) => {
  try {
    const { playerCount, rounds, isPublic } = req.body;
    const gameID = generateCode();

    await Game.create({
      id: gameID,
      owner: req.params.id,
      playerCount,
      players: [req.params.id],
      rounds,
      currentChance: 0,
      isPublic,
    });

    res.status(200).json({
      status: 'success',
      message: 'game created',
      id: `${gameID}`,
    });
  } catch (err) {
    return next(new AppError(err.message, 400, res));
  }
};

// ROUTE TO JOIN A GAME
exports.joinGame = async (req, res, next) => {
  try {
    // GET GAME ID FROM QUERY
    const gameID = req.query.gameID;

    // FIND GAME TO CHECK IF IT IF FULL
    const game = await Game.findOne({ id: gameID });

    // SHOW ERROR IF GAME IS FULL
    if (game.playerCount <= game.players.length)
      return next(new AppError('Game is already full', 400, res));

    // ADD USER TO THE GAME
    await Game.findOneAndUpdate(
      { id: gameID },
      { $push: { players: req.params.id } },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      status: 'success',
      message: `successfully joined game with id ${gameID}`,
    });
  } catch (err) {
    return next(new AppError(err.message, 400, res));
  }
};
