const {Router}=require('express');
const rutas=Router();
const con_leer=require('../controller/leerdos.controller')

rutas.get('/',con_leer.obt_all);
rutas.get('/:id',con_leer.only_one);
rutas.put('/:id',con_leer.actualiza)

module.exports=rutas;