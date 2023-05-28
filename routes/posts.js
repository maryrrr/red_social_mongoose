const express = require('express');
const router = express.Router()
const { authentication,isAuthor } = require("../middlewares/authentication");
const PostController = require('../controllers/PostController');

router.post('/',authentication,PostController.create)
router.put('/update/:_id',authentication,isAuthor,PostController.update)
router.get('/getAll',PostController.getAll)
router.delete('/id/:_id',authentication,isAuthor,PostController.delete)
router.get('/:title',PostController.getProductsByName)
router.get('/id/:_id',PostController.getById)
router.put('/reviews/:_id', authentication, PostController.insertComment)
router.put('/likes/:_id', authentication, PostController.like)
router.delete("/unlike/:_id", authentication, PostController.removeLike)

module.exports = router;