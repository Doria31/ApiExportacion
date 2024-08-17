const {model,Schema} = require('mongoose')

const ExportacionSchema = new Schema({
    nameProduct: {
        type: String,
        required:[true, 'El nombre del producto es requerido'],
        maxlength:[20,'Maximo 11 caracteres'],
        minlength:[3, 'Minimo 6 caracteres']
    },
    price : {
        type: Number,
        required:[true, 'El numero del producto es requerido'],
        maxlength:[999999999,'Maximo 11 caracteres'],
        minlength:[1, 'Minimo 6 caracteres']
    },
    weight : {
        type: Number,
        required:[true, 'El peso es requerido'],
        maxlength:[999999999,'Maximo 11 caracteres'],
        minlength:[1, 'Minimo 6 caracteres']
    }
}
)

module.exports = model('Exportacion', ExportacionSchema, 'exportacion') 