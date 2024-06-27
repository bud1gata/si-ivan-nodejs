import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config/config.js" 
import mongoose from "mongoose";
import { Inventaris } from "./models/dbModels.js"

const app = express();

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Backend terkoneksi ke database.');
        app.listen(PORT, () => {
            console.log(`Aplikasi berjalan pada port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });