const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

// USER MUST BE LOGGED IN TO ACCESS THE ROUTES COMING AFTER THIS STATEMENT
router.use(authController.protect);

router.get('/getMyDetails', userController.getMe, userController.getMyDetails);
router.get('/joinGame', userController.getMe, userController.joinGame);
router.post('/createGame', userController.getMe, userController.createGame);
router.post(
  '/changeUsername',
  userController.getMe,
  userController.changeUsername
);
router.post(
  '/createQuestion',
  userController.getMe,
  userController.createQuestion
);

module.exports = router;
