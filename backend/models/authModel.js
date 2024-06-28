// models/dbModels.js
import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define Keterlambatan Schema
const authSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nbm: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});


export const auth = mongoose.model('user', authSchema);
