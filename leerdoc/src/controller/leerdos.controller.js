const leer_doc = require('../models/modeldocgeneral')
const ladb = require('../database/ladb');
const repSMOdel = require('../models/repuesta');
const { ObjectId } = require('mongodb');
//const elcl=require('../redis/micache')

class Elcontroller {
    obt_all = async (req, res) => {
        try {
            var opciones = {
                projection: { historial_cambios: 0 },
            };
            await ladb.connect();
            const este = ladb.db().collection('losdocumentos');
            var de = await este.find({}).toArray()
            // console.log("base conectada", de);

            repSMOdel.mensaje = 'lista documentos'
            repSMOdel.status = 200;
            repSMOdel.datos = de;

            res.json(repSMOdel);
        } finally {
            await ladb.close();
        }
    }
    only_one = async (req, res) => {
        var { id } = req.params
        var opciones = {            
            projection: { historial_cambios: 0 },
        };
        try {            
            await ladb.connect();
            const este = ladb.db().collection('losdocumentos');
            var de = await este.findOne({ _id: ObjectId(id) }, opciones)
            //console.log(de)
            if (de === null) {
                repSMOdel.mensaje = 'no encontrado';
                repSMOdel.status = 301;
            } else {
                repSMOdel.mensaje = 'usuario'
                repSMOdel.status = 200;
            }
            //await SET_ASYNC(`usuario-${id}`, JSON.stringify(de))
            repSMOdel.datos = de;
            res.json(repSMOdel);
        } finally {
            await ladb.close();
        }
    }

    actualiza = async (req, res) => {
        var { id } = req.params
        var { nuevo } = req.body
        try {
            await ladb.connect();
            const este = ladb.db().collection('losdocumentos');
            var de = await este.findOne({ _id: ObjectId(id) });
            //console.log(de)
            if (de === null) {
                repSMOdel.mensaje = 'no encontrado';
                repSMOdel.status = 301;
            } else {
                var otre = [nuevo];
                var estex = de.historial_cambios;
                estex.forEach(item => {
                    otre.push(item);
                });

                var update = {
                    "$set": {
                        "historial_cambios": otre
                    }
                };
                // Return the updated document instead of the original document
                const options = { returnNewDocument: true };

                await este.findOneAndUpdate({ _id: ObjectId(id) }, update, options)
                repSMOdel.mensaje = 'usuario'
                repSMOdel.status = 200;
            }
            //await SET_ASYNC(`usuario-${id}`, JSON.stringify(de))
            repSMOdel.datos = de;
            res.json(repSMOdel);
        } finally {
            await ladb.close();
        }
    }
}

const este = new Elcontroller();
module.exports = este;