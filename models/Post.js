const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    userId: { type: ObjectId, ref: "User" },
    reviews: [{
        userId: { type: ObjectId, ref: 'User' },
        comment: String
        }],
    likes: [{ type: ObjectId }],

}, { timestamps: true });
PostSchema.index({

    title: "text",
    
    });

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;