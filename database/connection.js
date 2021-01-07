var mysql= require('mysql');
var cnx = mysql.createConnection({host: "SG-curso2-3712-mysql-master.servers.mongodirector.com", user: 'sgroot', password: 'pnU4n4rCotB@lsMm', database: curso2, port: 3306});

cnx.connect(err =>{
    if(!err){
        console.log(`Database connection succesfull`)
    }else{
        console.log(`Database connection failed: ${err}`)
    }
});

module.exports= cnx;