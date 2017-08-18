var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('alta');
});

router.post('/', function(req, res, next) {
    var db=req.db;
    var usuarios=db.get('usuarios');
});

module.exports = router;
