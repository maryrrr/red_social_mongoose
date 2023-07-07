const express = require('express');
const router = express.Router()
const { authentication } = require("../middlewares/authentication");
const UserController = require('../controllers/UserController');


router.post('/register', UserController.register)
router.get('/getAll',UserController.getAll)
router.post('/login',UserController.login)
router.delete('/logout/:_id',UserController.logout)

module.exports = (app) => {
    app.use('/users', router);
  };