const express = require('express');
const router = express.Router()
const { authentication,isAuthor } = require("../middlewares/authentication");
const PostController = require('../controllers/PostController');

router.get('/getAllPosts',PostController.getAllPosts)
router.get('/getByTitle/:title',PostController.getByTitle)
router.post('/newPost',authentication,PostController.create)
router.put('/update/:_id',authentication,PostController.update)
router.delete('/deletePost/:_id',authentication,PostController.delete)
router.get('/getById/:_id',PostController.getById)
router.put('/reviews/:_id', authentication, PostController.insertComment)
router.put('/likes/:_id', authentication, PostController.like)
router.delete("/unlike/:_id", authentication, PostController.removeLike)

module.exports = router