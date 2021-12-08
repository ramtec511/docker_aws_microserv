//const usuariomodel = require('../models/usuariogen');
const log = require('../models/loguearse')
const ladb = require('../database/ladb');
const repSMOdel = require('../models/repuesta');
const { ObjectId } = require('mongodb');
const { GET_ASYNC, SET_ASYNC, DEL_ASYNC } = require('../redis/micache');
//const elcl=require('../redis/micache')

class Elcontroller {
  inicio = async (req, res) => {
    var { usuario, pass } = req.body;
    var quien = log.validate({ usuario, pass });
    var opciones = {
      projection: { pass: 0, ultimo_inicio_sesion: 0, tipo: 0 },
    };
    //const [errores]=quien.val({usuario,pass})
    if (quien.length > 0) {
      var cual = '';
      //console.log(quien)
      quien.forEach(item => {
        cual += ` -->  ${item.message}`;
      });
      repSMOdel.mensaje = cual
      repSMOdel.status = 301;
      repSMOdel.datos = [];
      res.send(repSMOdel)
    } else {
      /* try {
         await ladb.connect();
         const este = ladb.db().collection('usuarios');
         var de =await este.find().toArray()
         console.log("base conectada", de);
         res.send(req.body)
       } finally {
         await ladb.close();
       }*/
      try {
        await ladb.connect();
        const este = ladb.db().collection('usuarios');
        var de = await este.findOne({ usuario: usuario, pass: pass },opciones)
        if (de === null) {
          repSMOdel.mensaje = 'no encontrado';
          repSMOdel.status = 301;
        } else {
          //console.log("base conectada", de);
          //await elcl.set('usuario','44')
          /*elcl.on('error',(err)=>{console.log('error en redis ',err)})
          await elcl.connect();
          await elcl.set(`us-${de._id}`,JSON.stringify(de))*/
          //var des=await GET_ASYNC('us-61a98198da8a0538a09a691d');
          await SET_ASYNC(`usuario-${de._id}`, JSON.stringify(de))
          //console.log(des)
          repSMOdel.mensaje = 'usuario'
          repSMOdel.status = 200;
        }

        repSMOdel.datos = de;
        res.json(repSMOdel)
      } finally {
        await ladb.close();
      }
    }
  }

  vista = async (req, res) => {

    res.send('el login');
  }
  elid = async (req, res) => {
    var { id } = req.params;
    var si_no = await GET_ASYNC(`usuario-${id}`);
    if (si_no !== null) {
      repSMOdel.mensaje = 'usuario'
      repSMOdel.status = 200;
      repSMOdel.datos = JSON.parse(si_no);
      res.send(repSMOdel);
    } else {
      try {
        await ladb.connect();
        const este = ladb.db().collection('usuarios');
        //var ob_id= 
        var de = await este.findOne({ _id: ObjectId(id) })
        console.log(de)
        if (de === null) {
          repSMOdel.mensaje = 'no encontrado';
          repSMOdel.status = 301;
        } else {
          repSMOdel.mensaje = 'usuario'
          repSMOdel.status = 200;
        }
        await SET_ASYNC(`usuario-${id}`, JSON.stringify(de))
        repSMOdel.datos = de;
        res.send(repSMOdel)
      } finally {
        await ladb.close();
      }
    }

  }

  deslog = async (req, res) => {
    var { elid } = req.body;

    try {
      await ladb.connect();
      const este = ladb.db().collection('usuarios');
      //var ob_id= 
      var de = await este.findOne({ _id: ObjectId(elid) })
      console.log(de)
      if (de === null) {
        repSMOdel.mensaje = 'no encontrado';
        repSMOdel.status = 301;
      } else {
        var si_no = await GET_ASYNC(`usuario-${de._id}`);
        if (si_no !== null) await DEL_ASYNC(`usuario-${de._id}`);
        repSMOdel.mensaje = 'deslog'
        repSMOdel.status = 200;
      }

      repSMOdel.datos = de;
      res.send(repSMOdel)
    } finally {
      await ladb.close();
    }

  }
}

const este = new Elcontroller();
module.exports = este;