const express = require('express');
const router = express.Router();
const adminData = require('../routes/admin');
router.get('/', (req, res) => {
    const products=adminData.products;
    res.render('shop',{prods:products,pageTitle:'shop',link:'/'})
});

module.exports = router;