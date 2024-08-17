const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Conectado a base de datos')
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = dbConnect