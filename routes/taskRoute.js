const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController.js');

router.get('/', taskController.findAll);

router.get('/:id', taskController.findOne);

router.post('/', taskController.create);

router.put('/:id', taskController.update);

router.delete('/:id', taskController.destroy);

module.exports = router;
