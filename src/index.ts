import Server from './server/server';
import router from './routes/router';
import Mysql from './mysql/mysql';

// Arranque del server
const server = Server.init( 3000 );
server.app.use( router );

const mysql: Mysql = Mysql.singleton;

server.listen( () => {
    console.log('Server listening at port 3000');
});