const mongoose = require('mongoose')

const ConversationSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    bookTitle: {
        type: String
    },
    nugget: {
        type: String,
    },
    archived: {
        type: Number,
        default: 0
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