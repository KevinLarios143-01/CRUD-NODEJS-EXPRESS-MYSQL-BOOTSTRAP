var express= require('express');
var app=express();
var path=require('path');
var expressHbs=require('express-handlebars');
var bodyparser=require('body-parser');
var PORT=process.env.PORT || 4500;

app.engine('hbs', expressHbs({defaultLayout: 'base', extname: 'hbs'}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'views'));

//Middlewares

app.use(bodyparser.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

//enrutadores
var indexRouter=require('./routes/index');
var personaRouter=require('./routes/personas');
var alumnosRouter=require('./routes/alumnos');
var profesoresRouter=require('./routes/profesores');
var clasesRouter=require('./routes/clases');
var horariosRouter=require('./routes/horarios');
var asistenciasRouter=require('./routes/asistencias');
var reportesRouter=require('./routes/reportes');

app.use('/index', indexRouter);
app.use('/personas', personaRouter);
app.use('/alumnos', alumnosRouter);
app.use('/profesores', profesoresRouter);
app.use('/clases', clasesRouter);
app.use('/horarios', horariosRouter);
app.use('/asistencias',asistenciasRouter);
app.use('/reportes', reportesRouter);



app.listen(PORT, () =>{
    console.log(`Server is runing on port ${PORT}`);
});