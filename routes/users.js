const express = require('express');
const router = express.Router()
const { authentication } = require("../middlewares/authentication");
const UserController = require('../controllers/UserController');

router.post('/',UserController.create)
router.get('/getAll',authentication,UserController.getAll)
router.post('/login',UserController.login)
router.delete('/logout/:_id',UserController.logout)

module.exports = router;