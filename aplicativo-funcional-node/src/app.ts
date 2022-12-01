import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';
import {notFoundHandler} from "./middlewares/notFound.middleware";
import {confrontoRouter} from "./routers/confronto.router";
import {equipeRouter} from "./routers/equipe.router";
import {participanteRouter} from "./routers/participante.router";
import {competicaoRouter} from "./routers/competicao.router";
import { slalonRouter } from './routers/slalon.router';

// App variables
const app: Application = express();
const port: number = config.port;

// App configuration
app.set('port', port);
app.use(helmet());
app.use(cors());
app.use(express.json());

// App routes
app.use(confrontoRouter);
app.use(slalonRouter);
app.use(competicaoRouter);
app.use(equipeRouter);
app.use(participanteRouter);

// Errors handlers
app.use(notFoundHandler);

export default app;