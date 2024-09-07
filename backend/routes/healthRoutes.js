const express = require('express');
const router = express.Router();
const { getUserData, updateUserData } = require('../controllers/healthController');

router.get('/user/:id', getUserData);
router.post('/user/:id', updateUserData);

module.exports = router;
