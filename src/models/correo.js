const { Schema, model } = require('mongoose');

const correoSchema = new Schema(
    {
        name: { type: String, required: true},
        mail: { type: String, required: true},
        number: { type: String, required: true},
        typeProject: { type: String, required: true },
        descripcion: { type: String, required: true },
        date: Date
    }, {
        timestamps: true
    });

module.exports = model('Correo', correoSchema);