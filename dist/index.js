"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var router_1 = __importDefault(require("./routes/router"));
var mysql_1 = __importDefault(require("./mysql/mysql"));
// Arranque del server
var server = server_1.default.init(3000);
server.app.use(router_1.default);
var mysql = mysql_1.default.singleton;
server.listen(function () {
    console.log('Server listening at port 3000');
});
