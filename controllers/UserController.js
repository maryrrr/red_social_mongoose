const User = require('../models/User')
const Post = require('../models/Post')
const jwt = require('jsonwebtoken');
require("dotenv").config()
const bcrypt = require('bcryptjs')
//const { jwt_secret } = require("../config/key.js");



const UserController ={

    async register(req, res, next) {
		try {
            req.body['password'] = req.body?.password ? bcrypt.hashSync(req.body.password, 10)  : null
            req.body['password2'] = req.body?.password2 ? bcrypt.hashSync(req.body.password2, 10)  : null
			const user = await User.create({ ...req.body, role: 'user' })
			res.status(201).send({ message: 'Usuario registrado con exito', user })
		} catch (error) {
			error.origin = 'usuario'
			next(error)
		}
	},
    async getAll(req, res) {

        try {
            const user = await User.find({ tokens: { $exists: true, $not: { $size: 0 } } })
            res.send(user)
        } catch (error) {
            console.error(error);
        }
    },
    async login(req, res) {

        try {
            const user = await User.findOne({
            email: req.body.email,
        })
        const token = jwt.sign({ _id: user._id },  process.env.JWT_SECRET);

        if (user.tokens.length > 4)user.tokens.shift();
        user.tokens.push(token);
        await user.save();
        res.send({ message: 'Welcome  ' + user.name, token ,user});
        } catch (error) {
        console.error(error);
        }
    },
    async logout(req, res) {

        try {
            await User.findByIdAndUpdate(req.user._id, {
            $pull: { tokens: req.headers.authorization },
        });
        res.send({ message: "Disconnected successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to disconnect the user",});
        }
    },
    async like(req, res) {

        try {
            await User.findByIdAndUpdate(
            req.params._id,
            { $push: { likes: req.user._id } },
            { new: true }
        );
        res.send(post);
        } catch (error) {
        console.error(error);
        res.status(500).send({ message: "There was a problem with your like" })
    }
},
    async getInfo(req, res) {
        try {
        const user = await User.findById(req.user._id);
        const userPosts = await Post.find({ userId: req.user._id });
        const userPost = { userInfo: user, posts: userPosts };

        res.send({ message:"User and their posts found",userPost} );
        } catch (error) {
        console.error(error);

        res.status(500).send({
            message: "Error trying to get user",
        });
        }
  },
    }

module.exports = UserController;