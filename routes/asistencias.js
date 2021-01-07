var router=require('express').Router();
const { query } = require('../database/connection');
var connection=require('../database/connection');
var queries=require('../database/queries/asistencia');




router.get('/lista', (req,res)=>{
    connection.query(queries.listar,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/asistencias',{asistencia:result});
        }
    })
})

router.get('/agregarAS', (req,res)=>{
    connection.query(queries.listart,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/agregarAS',{asistencia:result});
        }
    })
})


router.get('/eliminar/:id',(req,res)=>{
    connection.query(queries.eliminar(req.params.id),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/asistencias/lista');
        }
    })
})



router.post('/agregarAS',(req,res)=>{


    var data={
        prodip:req.body.prodip,
        alcui: req.body.alcui,
        clasi: req.body.clasi
    }
    connection.query(queries.agregar(data),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/asistencias/lista');
        }
    })
})
module.exports=router;