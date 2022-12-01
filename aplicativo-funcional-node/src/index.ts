import app from './app';
import {Logger} from 'tslog';
import pool from './db';

const log: Logger = new Logger({name: "APP"});

pool.getConnection().then(() => {
    app.listen(app.get('port'), () => {
        log.debug(`Listening on port ${app.get('port')}`);
    });
}).catch(error => {
    log.error(error.message);
});