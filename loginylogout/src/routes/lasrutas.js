const {Router}=require('express');
const rutas=Router();
const elcontrol=require('../controller/loginuser');

rutas.get('/',elcontrol.vista)
rutas.post('/login',elcontrol.inicio)
rutas.get('/:id',elcontrol.elid)
rutas.post('/delog',elcontrol.deslog)

module.exports=rutas;