import {Inventaris} from "../models/dbModels.js";

export const getInventaris = async(req, res) => {
    try {
        const response = await Inventaris.find({});
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messages);
    }
}