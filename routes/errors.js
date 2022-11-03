const express = require('express');
const { route } = require('.');
const router = express.Router();

// Middlewares
const errorsMiddleware = require ('../middlewares/errors');

// EJS View route
router.use(errorsMiddleware.get404);

// Router export
module.exports = router; 