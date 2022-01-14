const express = require('express')
const cors = require('cors')


class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //middlewares
        this.middlewares();
        
        //rutas de la app
        this.routes();
    }

    //middlewares

    middlewares() {

        this.app.use(cors());

        //procesa body serializando a json
        this.app.use( express.json());

        this.app.use( express.static('public'));

    }

    routes() {
        
        this.app.use(this.usuariosPath,require('../routes/usuarios'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando puerto ${ this.port }`);
        });
    }
}


module.exports = Server;