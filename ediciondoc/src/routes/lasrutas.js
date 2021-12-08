const {Router}=require('express');
const rutas=Router();
const edit_cont=require('../controller/editar.controller');

rutas.get('/:id',edit_cont.only_one);
rutas.put('/:id',edit_cont.actualiza);

module.exports=rutas;