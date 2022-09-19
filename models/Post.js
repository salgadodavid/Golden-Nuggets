const mongoose = require('mongoose')

const ConversationSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    text: {
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

module.exports = mongoose.model('Conversation', ConversationSchema)