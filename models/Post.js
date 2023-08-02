const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    userId: { type: ObjectId, ref: "User" },

    comments: [
        {
          userId: { type: ObjectId, ref: "User" },
          comment: {
            type: String,
            required: [true, "Your comment is empty?"],
          },
        }
      ],
      userId: {
        type: ObjectId,
        ref: "User",
      },
    //   likes: [{ userId: { type: ObjectId, ref: "User" } }],
     },
    { timestamps: true }
  );
PostSchema.index({

    title: "text",
    
    });

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;