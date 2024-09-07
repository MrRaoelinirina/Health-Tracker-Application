const mongoose = require('mongoose');

const dietSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    meals: [
        {
            type: String,
            required: true
        }
    ],
    calories: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Diet', dietSchema);
