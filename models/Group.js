const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
    groupMod: {
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
    members:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Group', GroupSchema)