const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const homeRoutes = require('./route/home')
const adminRoutes = require('./route/admin');
const shopRoutes = require('./route/display');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(homeRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'view', '404.html'));
});

app.listen(3002);