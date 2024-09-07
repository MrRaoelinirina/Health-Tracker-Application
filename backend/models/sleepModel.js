const mongoose = require('mongoose');

const sleepSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    hours: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Sleep', sleepSchema)
