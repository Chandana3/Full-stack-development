const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/add-todo', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'view', 'todo_add.html'));
});

router.post('/add-todo', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;