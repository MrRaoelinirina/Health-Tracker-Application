const User = require('../models/userModel');
const Activity = require('../models/activityModel');
const Sleep = require('../models/sleepModel');
const Diet = require('../models/dietModel');

// Get user data
exports.getUserData = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const activities = await Activity.find({ userId: req.params.id });
        const sleep = await Sleep.find({ userId: req.params.id });
        const diet = await Diet.find({ userId: req.params.id });

        res.json({ user, activities, sleep, diet });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update user data
exports.updateUserData = async (req, res) => {
    try {
        const { activity, sleep, diet } = req.body;

        // Update records
        await Activity.updateMany({ userId: req.params.id }, activity);
        await Sleep.updateMany({ userId: req.params.id }, sleep);
        await Diet.updateMany({ userId: req.params.id }, diet);

        res.json({ message: 'Data updated successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
