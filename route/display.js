const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/display', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'view', 'todo_display.html'));
});

module.exports = router;