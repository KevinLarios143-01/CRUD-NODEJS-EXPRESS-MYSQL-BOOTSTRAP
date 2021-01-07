
var router=require('express').Router();
const { query } = require('../database/connection');
var connection=require('../database/connection');
var queries=require('../database/queries/profesor');


router.get('/lista', (req,res)=>{
    connection.query(queries.listar,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/profesores',{profesor:result});
        }
    })
})


router.get('/editarP/:id',(req,res)=>{
    connection.query(queries.profesor(req.params.id),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/editarP',{profesor:result});
        }
    })
})
router.post('/editarP/:id',(req,res)=>{
    var data={
        id: req.params.id,
        nombre:req.body.nombre,
        apellido: req.body.apellido,
        fecha: req.body.fecha
    }
    connection.query(queries.actualizar(data),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/profesores/lista');
        }
    })
})
router.get('/eliminar/:id',(req,res)=>{
    connection.query(queries.eliminar(req.params.id),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/profesores/lista');
        }
    })
})

router.get('/agregarP',(req,res)=>{
    res.render('templates/agregarP');
})

router.post('/agregarP',(req,res)=>{
    var data={
        dpi:req.body.dpi,
        nombre:req.body.nombre,
        apellido: req.body.apellido,
        fecha: req.body.fecha
    }
    connection.query(queries.agregar(data),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/profesores/lista');
        }
    })
})
module.exports=router;