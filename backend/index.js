import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config/config.js" 
import mongoose from "mongoose";

const app = express();

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App running on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });