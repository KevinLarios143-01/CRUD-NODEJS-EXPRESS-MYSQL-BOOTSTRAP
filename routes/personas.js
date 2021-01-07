
var router=require('express').Router();
const { query } = require('../database/connection');
var connection=require('../database/connection');
var queries=require('../database/queries/persona');

router.get('/lista', (req,res)=>{
    connection.query(queries.listar,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/personas',{persona:result});
        }
    })
})

router.get('/editar/:id',(req,res)=>{
    connection.query(queries.persona(req.params.id),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/editar',{persona:result});
        }
    })
})
router.post('/editar/:id',(req,res)=>{
    var data={
        id: req.params.id,
        nombre:req.body.nombre,
        apellido: req.body.apellido,
        profesion: req.body.profesion,
        edad: req.body.edad
    }
    connection.query(queries.actualizar(data),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/personas/lista');
        }
    })
})
router.get('/eliminar/:id',(req,res)=>{
    connection.query(queries.eliminar(req.params.id),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/personas/lista');
        }
    })
})

router.get('/agregar',(req,res)=>{
    res.render('templates/agregar');
})

router.post('/agregar',(req,res)=>{
    var data={
        cui:req.body.cui,
        nombre:req.body.nombre,
        apellido: req.body.apellido,
        profesion: req.body.profesion,
        edad: req.body.edad
    }
    connection.query(queries.agregar(data),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/personas/lista');
        }
    })
})
module.exports=router;