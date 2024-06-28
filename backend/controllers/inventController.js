import { response } from "express";
import {Inventaris} from "../models/dbModels.js";

//Ambil semua data
export const getInventaris = async(req, res) => {
    try {
        const response = await Inventaris.find({});
        return res.status(200).json({
            count: response.length,
            data: response
        });
    } catch (error) {
        console.log(error.messages);
        res.status(500).send({ message: error.message});
    }
}

//Cari data menggunakan ID
export const getInventarisById= async(req, res) => {
    try {
        const {serialnumber} = req.params;
        const response = await Inventaris.find({serialnumber});
        if (response.length == 0) {
            return response.status(404).json({message: `Data berdasarkan Serial Number tersebut tidak ditemukan.`});
        }
        return res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
}

//edit data
export const updateInventaris = async (req, res) => {
    try {
        if (
            !req.body.nama || req.body.nama.trim() === '' ||
            !req.body.merk || req.body.merk.trim() === '' ||
            !req.body.kondisi || req.body.kondisi.trim() === '' ||
            !req.body.tempat || req.body.tempat.trim() === '' ||
            !req.body.tanggalBeli || req.body.tanggalBeli.trim() === '' ||
            !req.body.serialnumber || req.body.serialnumber.trim() === '' ||
            !req.body.diperoleh || req.body.diperoleh.trim() === '' ||
            !req.body.status || req.body.status.trim() === ''
        ) {
            return res.status(400).send({
                message: 'Mohon masukkan data secara lengkap!',
            });
        }

        const { id } = req.params;
        const response = await Inventaris.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true } 
        );

        if (!response) {
            return res.status(404).json({ message: 'Tidak terdapat data yang dicari' });
        }

        res.status(200).json({ msg: "Data telah diperbaharui", data: response });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
};


//Tambah data
export const createInventaris = async (req, res) => {
    try {
        const {
            nama,
            merk,
            kondisi,
            tempat,
            tanggalBeli,
            serialnumber,
            diperoleh,
            status
        } = req.body;

        // Validate required fields
        if (
            !nama || nama.trim() === '' ||
            !merk || merk.trim() === '' ||
            !kondisi || kondisi.trim() === '' ||
            !tempat || tempat.trim() === '' ||
            !tanggalBeli || tanggalBeli.trim() === '' ||
            !serialnumber || serialnumber.trim() === '' ||
            !diperoleh || diperoleh.trim() === '' ||
            !status || status.trim() === ''
        ) {
            return res.status(400).send({
                message: 'Mohon masukkan data secara lengkap!',
            });
        }

        // Create new Inventaris
        const response = await Inventaris.create({
            nama: nama.trim(),
            merk: merk.trim(),
            kondisi: kondisi.trim(),
            tempat: tempat.trim(),
            tanggalBeli: tanggalBeli.trim(),
            serialnumber: serialnumber.trim(),
            diperoleh: diperoleh.trim(),
            status: status.trim()
        });

        res.status(201).json({ msg: "Data baru ditambahkan", data: response });
    } catch (error) {
        console.error("Error creating inventaris:", error.message);
        res.status(500).send({ message: "Internal Server Error" });
    }
};


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


