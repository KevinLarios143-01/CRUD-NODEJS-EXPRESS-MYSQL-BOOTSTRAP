
var router=require('express').Router();
const { query } = require('../database/connection');
var connection=require('../database/connection');
var queries=require('../database/queries/alumno');

router.get('/lista', (req,res)=>{
    connection.query(queries.listar,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/alumnos',{alumno:result});
        }
    })
})

router.get('/editarA/:id',(req,res)=>{
    connection.query(queries.alumno(req.params.id),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/editarA',{alumno:result});
        }
    })
})
router.post('/editarA/:id',(req,res)=>{
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
            res.redirect('/alumnos/lista');
        }
    })
})
router.get('/eliminar/:id',(req,res)=>{
    connection.query(queries.eliminar(req.params.id),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/alumnos/lista');
        }
    })
})

router.get('/agregarA',(req,res)=>{
    res.render('templates/agregarA');
})

router.post('/agregarA',(req,res)=>{
    var data={
        cui:req.body.cui,
        nombre:req.body.nombre,
        apellido: req.body.apellido,
        fecha: req.body.fecha
    }
    connection.query(queries.agregar(data),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/alumnos/lista');
        }
    })
})
module.exports=router;