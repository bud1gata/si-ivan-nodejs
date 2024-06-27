import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const inventSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    merk: {
        type: String,
        required: true
    },
    kondisi: {
        type: String,
        required: true
    },
    tempat: {
        type: String,
        required: true
    },
    tanggalBeli: {
        type: Number,
        required: true
    },
    serialNumber: {
        type: String,
        required: true
    },
    diperoleh: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
},
{
    Timestamp: true,
}
);

export const Inventaris = mongoose.model('Inventaris', inventSchema);