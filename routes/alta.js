var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('alta');
});

router.post('/', function(req, res, next) {
    var db=req.db;
    var usuarios=db.get('usuarios');
    usuarios.count({
        nombre:req.body.txtUsuario,
        password:req.body.txtClave
    }).then((cuenta)=>{
        if(cuenta>0){
            res.render('alta',{
                mensaje:'Error!, datos duplicados'
            });
        }else{
        usuarios.insert({
            password: req.body.txtClave,
            usuario: req.body.txtUsuario,
            nombreCompleto: req.body.txtNombreC
        }).then((error) => {
            res.render('index');
        }).catch((error) => {
            console.log(error);
        });
        }
    })
});

module.exports = router;
