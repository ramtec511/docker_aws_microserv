const new_md = require('../models/docnuevo')
const ladb = require('../database/ladb');
const repSMOdel = require('../models/repuesta');
//const { ObjectId } = require('mongodb');
//const elcl=require('../redis/micache')

class Elcontroller {
    carga_new = async (req, res) => {
        //var { elid } = req.body;
        const quien = new_md.validate(req.body)
        if (quien.length > 0) {
            var cual = '';
            //console.log(quien)
            quien.forEach(item => {
                cual += ` -->  ${item.message}`;
            });
            repSMOdel.mensaje = cual
            repSMOdel.status = 301;
            repSMOdel.datos = req.body;
            res.json(repSMOdel)
        } else {
            try {
                await ladb.connect();
                const este = ladb.db().collection('losdocumentos');
                //var ob_id= 
                este.insertOne(req.body);/*(err,responde)=>{
                    if (err) {
                        res.json({mensaje:err})
                    } else {
                        
                    }
                })*/
                //console.log(de)              
                repSMOdel.mensaje = 'Ok'
                repSMOdel.status = 200;

                repSMOdel.datos = req.body;
                res.json(repSMOdel)
            } catch (e) {
                res.json(e);
            };
        }
    }
}

const este = new Elcontroller();
module.exports = este;