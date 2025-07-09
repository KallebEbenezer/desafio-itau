import 'reflect-metadata';
import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDatabase } from '../settings/database/db.connect';
import router from './router/routes';

const server = express();   

const host: string = String(process.env.HOST_SERVER);
const port: number = Number(process.env.PORT_SERVER);

connectDatabase()
.then(() => {
    server.listen(port, host, () => {
        server.use(express.json());
        server.use(router);
        server.use(cors());
        console.log(`Server is running in https://${host}:${port}`);
        })
    })
    .finally(() => {
        console.log("Initialization process completed.");
    });