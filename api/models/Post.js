import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
})

export const PostModel = mongoose.model("Post", PostSchema);