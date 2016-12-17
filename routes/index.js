var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
router.get('/saveLink/', function(req, res, next) {
    console.log(req.param('url'));
    return res.sendStatus(200);
});

module.exports = router;
