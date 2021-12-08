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
    fecha_modificacion: { //Fecha del frente
        type: String,
        required: true,
        message: 'fecha en formatos ISO'
    }
})

module.exports = docnuevo;