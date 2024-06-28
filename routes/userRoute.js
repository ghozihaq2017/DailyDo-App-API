const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.get('/', userController.findAll);

router.get('/me', userController.findOwnProfile);

router.get('/:id', userController.findOne);

router.post('/', userController.create);

router.put('/:id', userController.update);

router.delete('/:id', userController.destroy);

module.exports = router;
