const Post = require('../models/Post');
const User = require("../models/User");

const PostController ={

    async create(req,res){
        try {
            const post= await Post.create({...req.body,userId:req.user._id})
            //console.log(req.body)
            res.status(201).send(post)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem creating the product' })
        }
    },
    async update(req, res) {
        try {
          const post = await Post.findByIdAndUpdate(req.params._id,req.body,
            {new: true,}
          );
          console.log(req.params._id);
          res.send({ message: "post successfully updated", post });
        } catch (error) {
          console.error(error);
        }
      },

    async getAllPosts(req, res) {

        try {
            //const { page = 1, limit = 6 } = req.query
            const post = await Post.find()
            .populate("userId")
            //.limit(limit)
            //.skip((page - 1) * limit);
            res.send({message:"All posts", post})
        } catch (error) {
            console.error(error);
        }
    },
    

    async delete(req, res) {

        try {
            const post = await Post.findByIdAndDelete(req.params._id)
            res.send({ post, message: 'Post deleted' })

        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'there was a problem trying to remove the publication' })
        }
    },
    async getByTitle(req, res) {

        try {
            const post = await Post.find({
            $text: {
            $search: req.params.title,
        },
    });
        res.send(post);
        } catch (error) {
        console.log(error);
        }
    },
    async getById(req, res) {
        try {
        const post = await Post.findById(req.params._id)
        res.send(post)
        } catch (error) {
        console.error(error);
        }
    },

    async insertComment(req, res) {

        try {
            const post = await Post.findByIdAndUpdate(
            req.params._id,
            { $push: { comments: { comment:req.body.comment, userId: req.user._id } } },
            { new: true }
        )
        if (!post) {
          return res.status(404).send({ message: "Post not found" });
      }

      console.log("Review added successfully:", post);

        res.send(post);
        } catch (error) {
        console.error(error);
        res.status(500).send({ message: "There was a problem with your review" });
    }
    },
    async like(req, res) {

        try {
            const post = await Post.findByIdAndUpdate(
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
    async removeLike(req, res) {
        try {
          const post = await Post.findByIdAndUpdate(
            req.params._id,
            {
              $pull: {
                likes: { userId: req.user._id },
              },
            },
            { new: true }
          );
    
          res.send(post);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Could not delete the like" })
          }
        },
        
      }



module.exports = PostController;