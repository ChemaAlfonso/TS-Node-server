import { Router, Request, Response } from 'express';
import Mysql from '../mysql/mysql';


const router = Router();

router.get( '/', ( req: Request, res: Response ) => {

    const query = ' SELECT * FROM clientes';

    Mysql.queryExect( query, (err, response: Object[]) => {
        if( err ) return;
        
        res.json({
            ok: true,
            code: 200,
            response
        });
        
    });


});


export default router;