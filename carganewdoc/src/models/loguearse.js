const Schema = require('validate');

const user = new Schema({
    usuario: {
        type: String,
        required: true,
        message: 'usuario requerio solo letras'
    },
    pass: {
        type: String,
        required: true,
        message: 'password requerio solo caracteres'
    }    
})

module.exports=user;