var router=require('express').Router();
const { query } = require('../database/connection');
var connection=require('../database/connection');
var queries=require('../database/queries/reporte');




router.get('/lista', (req,res)=>{
    connection.query(queries.listar,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/reportes',{reporte:result});
        }
    })
})

router.get('/agregarR', (req,res)=>{
    connection.query(queries.listart,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/agregarR',{reporte:result});
        }
    })
})


router.get('/eliminar/:id',(req,res)=>{
    connection.query(queries.eliminar(req.params.id),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/reportes/lista');
        }
    })
})



router.post('/agregarR',(req,res)=>{


    var data={
        
        moti: req.body.moti,
        prodip:req.body.prodip,
        alcui: req.body.alcui
        
    }
    connection.query(queries.agregar(data),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/reportes/lista');
        }
    })
})
module.exports=router;