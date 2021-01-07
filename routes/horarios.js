var router=require('express').Router();
const { query } = require('../database/connection');
var connection=require('../database/connection');
var queries=require('../database/queries/horario');


router.get('/lista', (req,res)=>{
    connection.query(queries.listars,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/horarios',{horario:result});
        }
    })
})






router.get('/editarH/:id',(req,res)=>{
    connection.query(queries.horario(req.params.id),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/editarH',{horario:result});
        }
    })
})
router.post('/editarH/:id',(req,res)=>{
    var data={
        id: req.params.idc,
        nombre:req.body.nombre,
        prodip: req.body.prodip,
        hordis: req.body.hordis
    }
    connection.query(queries.actualizar(data),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/horarios/lista');
        }
    })
})
router.get('/eliminar/:id',(req,res)=>{
    connection.query(queries.eliminar(req.params.id),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/horarios/lista');
        }
    })
})

router.get('/agregarH',(req,res)=>{
    res.render('templates/agregarH');
})

router.post('/agregarH',(req,res)=>{


    var data={
        idhor:req.body.idhor,
        hfin:req.body.hfin,
        hin: req.body.hin,
        hordia: req.body.hordia
    }
    connection.query(queries.agregar(data),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/horarios/lista');
        }
    })
})
module.exports=router;