const correosCtrl = {};

const Correo = require('../models/correo');

correosCtrl.getCorreos = async (req, res) => {
    const correos = await Correo.find();
    res.json(correos);
    console.log(correos);
    console.log("Correos mostrandose")
};

correosCtrl.setCorreo = async (req, res, next) => {
    console.log(req.body);
    const { name, mail, number, typeProject, descripcion, date } = req.body;
    const newCorreo = new Correo({
        name,
        mail,
        number,
        typeProject,
        descripcion,
        date
    });
    await newCorreo.save();
    res.json({mensaje: "Correo enviado"});
    console.log("correo enviado")
    
}

module.exports = correosCtrl;