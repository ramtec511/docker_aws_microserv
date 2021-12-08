const {Router}=require('express');
const rutas=Router();
const cargasNewmd=require('../controller/cargardos.controller')

rutas.post('/carganew',cargasNewmd.carga_new)

module.exports=rutas;