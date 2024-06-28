const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController.js');

router.get('/', projectController.findAllMe);

router.get('/all', projectController.findAll);

router.get('/:id', projectController.findOne);

router.post('/', projectController.create);

router.put('/:id', projectController.update);

router.delete('/:id', projectController.destroy);

module.exports = router;
