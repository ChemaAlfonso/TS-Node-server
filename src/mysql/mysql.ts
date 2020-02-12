import mysql = require('mysql');

export default class Mysql{
    private static _mySqlInstance: Mysql;

    cnn: mysql.Connection;
    connected: boolean = false;

    private constructor(){
        console.log('Mysql class construct');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'basedatos'
        });
        this.conectDb();
    }
    
    static get singleton() : Mysql {
        return this._mySqlInstance || ( this._mySqlInstance = new this() );
    }

    private conectDb(){
        this.cnn.connect((err: mysql.MysqlError) => {
            if( err ){
                console.log(err.message);
                return;
            }
            this.connected = true;
            console.log('Connected db');
        });
    }

    static queryExect( query: string, callback: (err: any, res?: any) => any ){
        this._mySqlInstance.cnn.query( query, (err, results: Object[], fields ) => {
            if( err ) return callback(err);
            callback(null, results);
        });
    }
    
}