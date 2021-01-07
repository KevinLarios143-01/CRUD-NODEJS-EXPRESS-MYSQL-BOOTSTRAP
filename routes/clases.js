var router=require('express').Router();
const { query } = require('../database/connection');
var connection=require('../database/connection');
var queries=require('../database/queries/clase');

router.get('/lista', (req,res)=>{
    connection.query(queries.listar,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/clases',{clase:result});
        }
    })
})



router.get('/agregarC', (req,res)=>{
    connection.query(queries.listarp,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/agregarC',{clase:result});
        }
    })
})



router.get('/eliminar/:id',(req,res)=>{
    connection.query(queries.eliminar(req.params.id),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/clases/lista');
        }
    })
})



router.post('/agregarC',(req,res)=>{


    var data={
        idc:req.body.idc,
        nombre:req.body.nombre,
        prodip: req.body.prodip,
        hordis: req.body.hordis
    }
    connection.query(queries.agregar(data),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/clases/lista');
        }
    })
})
module.exports=router;