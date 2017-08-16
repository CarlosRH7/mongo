var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var db = req.db;
    var usuarios = db.get('usuarios');

    usuarios.find({usuario:req.usuario}, function(e, docs){
        if(docs.length>0){
            res.render('bienvenido', { title: 'hola usuario' });
        }else{
            res.render('bienvenido', { title: 'No bienvenido' });
        }
    });
    // refacciones.find({},'-_id', function(e, docs){
    //     //se envian los datos para renderizar
    //     res.render('tabla', { datos:docs });
    // });
});
module.exports = router;
