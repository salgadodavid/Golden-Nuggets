const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    bookTitle: {
        type: String
    },
    author: {
        type: String,
    },
    description: {
        type: String,
    },
    members: {
        type: Array,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Conversation', ConversationSchema)