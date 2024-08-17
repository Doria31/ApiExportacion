const express = require('express')
const dbConnect = require('../database/config')
require('../database/config')
const {getExportacion, postExportacion, putExportacion, deleteExportacion} = require('../controllers/exportacionController')

class Server{
    constructor(){
        this.app = express()
        this.listen()
        this.dbConecction()
        this.pathExportacion = '/api/exportacion' 
        this.route()
    }

    async dbConecction(){
        await dbConnect()
    }

    route(){
        this.app.use(express.json())
        this.app.get(this.pathExportacion, getExportacion) 
        this.app.post(this.pathExportacion, postExportacion)
        this.app.put(this.pathExportacion, putExportacion)
        this.app.delete(this.pathExportacion+'/:id', deleteExportacion)
    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('Server is runing')
        })
    }
}

module.exports = Server