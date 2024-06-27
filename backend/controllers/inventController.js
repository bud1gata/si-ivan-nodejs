import {Inventaris} from "../models/dbModels.js";

//Ambil semua data
export const getInventaris = async(req, res) => {
    try {
        const response = await Inventaris.find({});
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messages);
    }
}

//Cari data menggunakan ID
export const getInventarisBySerial = async(req, res) => {
    try {
        const {id} = req.params;
        const response = await Inventaris.findById(id);
        if (response.length == 0) {
            return response.status(404).json({message: `Data yang dicari tidak ditemukan.`});
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messages);
    }
}

//edit data
export const updateInventaris = async(req, res) => {
    try {
        const {id} = req.params;
        const response = await Inventaris.findByIdAndUpdate(id, req.body);
        res.status(200).json({msg: "Data telah diperbaharui"});
    } catch (error) {
        console.log(error);
    }
}

//Tambah data
export const createInventaris = async(req, res) => {
    try {
        const response = await Inventaris.create(req.body);
        res.status(201).json({msg: "Data baru ditambahkan"});
    } catch (error) {
        console.log(error.messages);
    }
}

//hapus data
export const deleteInventaris = async(req, res) => {
    try {
        const {id} = req.params;
        const response = await Inventaris.findByIdAndDelete(id);
        res.status(200).json({msg: "Data telah dihapus"});
    } catch (error) {
        console.log(error);
    }
}

