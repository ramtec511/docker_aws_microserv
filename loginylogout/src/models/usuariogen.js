const Schema = require('validate');

const user = new Schema({
    usuario: {
        type: String,
        require: true,
        message: 'usuario requerio solo caracteres'
    },
    pass: {
        type: String,
        require: true,
        message: 'password requerio solo caracteres'
    },
    nombre: {
        type: String,
        require: true,
        message: 'nombre requerio solo caracteres'
    },
    ultimo_inicio_sesion: {
        type: Date,
        require: true
    },
    tipo: {
        type: String,        
        enums: ["desarrollo", "implementacion", "administrador", "usuario"],
        message: ' solo se admiten( desarrollo, implementacion, administrador, usuario )'
    },
    maximo_tiempo_sesion_inactiva: {
        type: Number,
        size: {
            length: 2
        },
        message: 'numero maximo 99'      
    }
})

module.exports=user;