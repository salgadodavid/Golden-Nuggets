const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    comment: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Comment', CommentSchema)