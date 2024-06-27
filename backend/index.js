import express, { request, response } from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config/config.js" 
import mongoose from "mongoose";
import { Inventaris } from "./models/dbModels.js"

const app = express();
app.use(cors());
app.use(express.json());

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Server Backend dapat berjalan dengan baik dan terkoneksi ke Server database.');
        app.listen(PORT, () => {
            console.log(`Aplikasi berjalan pada port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });