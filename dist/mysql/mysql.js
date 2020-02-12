"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var Mysql = /** @class */ (function () {
    function Mysql() {
        this.connected = false;
        console.log('Mysql class construct');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'basedatos'
        });
        this.conectDb();
    }
    Object.defineProperty(Mysql, "singleton", {
        get: function () {
            return this._mySqlInstance || (this._mySqlInstance = new this());
        },
        enumerable: true,
        configurable: true
    });
    Mysql.prototype.conectDb = function () {
        var _this = this;
        this.cnn.connect(function (err) {
            if (err) {
                console.log(err.message);
                return;
            }
            _this.connected = true;
            console.log('Connected db');
        });
    };
    Mysql.queryExect = function (query, callback) {
        this._mySqlInstance.cnn.query(query, function (err, results, fields) {
            if (err)
                return callback(err);
            callback(null, results);
        });
    };
    return Mysql;
}());
exports.default = Mysql;
