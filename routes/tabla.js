var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  //mostrar datos de la coleccion de refacciones
  var db = req.db;
  var refacciones = db.get('refacciones');
  refacciones.find({},'-_id', function(e, docs){
  
  //se envian los datos para renderizar
  res.render('tabla', { datos:docs });


  });

});

module.exports = router;
