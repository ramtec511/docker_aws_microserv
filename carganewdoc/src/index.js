const express=require('express');
const morgan=require('morgan');
const coros=require('cors');
const app=express();
const misrutas=require('./routes/lasrutas');

//middlewares
app.use(morgan('dev'));
app.use(coros())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//rutas
app.use(misrutas);

app.listen(3010);
console.log("escuchando puerto","cargar docs")