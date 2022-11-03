const express = require('express');
const router = express.Router();

// Middlewares
const indexMiddleware = require ('../middlewares/index');

// EJS View route
router.get('/', indexMiddleware.getIndex);

// HTML TEXT Example
router.get('/text', indexMiddleware.getText);

// HTML File route
router.get('/html', indexMiddleware.getHtml);

// Router export
module.exports = router; 