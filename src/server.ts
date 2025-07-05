import 'reflect-metadata';
import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDatabase } from './database/db_connect';

const host: string = String(process.env.HOST_SERVER);
const port: number = Number(process.env.PORT_SERVER);

const server = express();   
server.use(express.json());
server.use(cors());

connectDatabase()
    .then(() => {
        server.listen(port, host, () => {
            console.log(`Server is running in https://${host}:${port}`);
        })
    })
    .finally(() => {
        console.log("Initialization process completed.");
    });