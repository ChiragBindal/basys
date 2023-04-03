const express = require('express');
const priorController = require('../Controller/priorController');

// Defining Router
const router = express.Router();

// Applying CRUD operation
router
    .route('/')
    .get(priorController.getAllPrior)
    .post(priorController.createPrior);

module.exports = router;

