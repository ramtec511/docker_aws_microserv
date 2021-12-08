const Schema = require('validate');

const docnuevo = new Schema({
    titulo: {
        type: String,
        required: true,
        message: 'titulo requerio solo caracteres'
    },
    documento: {
        type: String,
        required: true,
        message: 'documento md requerio solo texto plano'
    },
    autor: {
        usuario: {
            type: String,
            required: true,
            message: 'usuario requerio solo caracteres'
        },
        nombre: {
            type: String,
            required: true,
            message: 'nombre requerio solo caracteres'
        }
    },
    modificado_por: {
        usuario: {
            type: String,
            required: true,
            message: 'usuario requerio solo caracteres'
        },
        nombre: {
            type: String,
            required: true,
            message: 'nombre requerio solo caracteres'
        }
    },
    fecha_creacion: {
        type: String,
        required: true,
        message: 'fecha en formatos ISO'
    },
    fecha_modificacion: { //Fecha del frente
        type: String,
        required: true,
        message: 'fecha en formatos ISO'
    },
    historial_cambios: [{
        documento: { //Documento texto plano en formato MD
            type: String
        },
        fecha: { //Fecha del frente
            type: String
        },
        fecha_server: { //Fecha del servidor
            type: Date
        },
        autor_cambio: {
            usuario: {
                type: String
            },
            nombre: {
                type: String
            }
        }
    }]
})

module.exports = docnuevo;