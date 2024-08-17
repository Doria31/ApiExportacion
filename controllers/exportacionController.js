//Method http / Api Exportacion

const Exportacion = require('../models/exportacion')

//Method GET

const getExportacion = async(req, res) => {
    const exportacion = await Exportacion.find()

    res.json(exportacion)
}

//Method POST

const postExportacion = async (req, res) => {

    const { nameProduct, price, weight } = req.body;;

    const newExportacion = new Exportacion({
        nameProduct,
        price,
        weight,
        
    });

    try {
        const savedExportacion = await newExportacion.save();
        res.status(201).json(savedExportacion); 
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

};

// Method PUT

const putExportacion = async(req, res) => {
    const { _id, nameProduct, price, weight } = req.body
    id = req.params.id
    let msg = 'Updated Export'
    try {
        await Exportacion.findByIdAndUpdate(_id,{ nameProduct:nameProduct, price:price, weight:weight})
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}   

//Method Delete

const deleteExportacion = async(req, res) => {
    let msg = 'Delete Export'
    id = req.params.id
    try {
        await Exportacion.findByIdAndDelete({_id: id})
    } catch (error) {
        msg = 'There was a problem while deleting'
    }
    res.json({msg:msg})
}

//Exportacion

module.exports = {
    getExportacion,
    postExportacion,
    putExportacion,
    deleteExportacion,
}