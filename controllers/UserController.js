const User = require('../models/User')
const jwt = require('jsonwebtoken');
require("dotenv").config();



const UserController ={
    async register(req, res, next) {
		try {
            const user = await User.create({ ...req.body, role: 'user' });
            res.status(201).send({ message: 'Usuario registrado con éxito', user });
        } catch (error) {
            error.origin = 'usuario';
            error.statusCode = 400;
            next(error);
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
        res.send({ message: 'Welcome  ' + user.name, token });
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
    }

module.exports = UserController;