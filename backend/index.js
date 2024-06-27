import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config/config.js" 

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Sistem berjalan pada Port: ${PORT}`);
});