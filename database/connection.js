var mysql= require('mysql');
var cnx=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Churumico2018*',
    database: 'curso2',
    multipleStatements: true
});

cnx.connect(err =>{
    if(!err){
        console.log(`Database connection succesfull`)
    }else{
        console.log(`Database connection failed: ${err}`)
    }
});

module.exports= cnx;