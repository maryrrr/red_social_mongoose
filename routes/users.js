const express = require('express');
const router = express.Router()
const { authentication } = require("../middlewares/authentication");
const UserController = require('../controllers/UserController');

router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.get('/getAll',authentication,UserController.getAll)
router.delete('/logout',authentication,UserController.logout)
router.get("/getInfo", authentication, UserController.getInfo);

module.exports = router;