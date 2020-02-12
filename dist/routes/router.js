"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = __importDefault(require("../mysql/mysql"));
var router = express_1.Router();
router.get('/', function (req, res) {
    var query = ' SELECT * FROM clientes';
    mysql_1.default.queryExect(query, function (err, response) {
        if (err)
            return;
        res.json({
            ok: true,
            code: 200,
            response: response
        });
    });
});
exports.default = router;
