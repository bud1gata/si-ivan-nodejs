import express from "express";

const app = express();

app.listen(PORT, () => {
    console.log(`Sistem berjalan pada Port: ${PORT}`);
});