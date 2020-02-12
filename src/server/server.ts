import express = require('express');
import path    = require('path');

export default class Server{

    public app: express.Application

    constructor( public port: number ){
        this.app = express();
    }

    static init( port: number ){
        return new Server( port );
    }

    listen( callback: () => void ){
        this.app.listen( this.port , callback );
        this.publishFolder();
    }

    private publishFolder(){
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use( express.static(publicPath) );
    }
}