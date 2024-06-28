import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { auth } from "../models/authModel";
import 'dotenv/config.js';

export const intLogin = async(req, res) => {

    const { nbm, password } = req.body;
    try {

        if (!nbm || !password) throw new Error("Please enter a username or password");

        const nbmFound = await auth.findOne({ nbm: nbm });

        if (!nbmFound) throw new Error("User not found");

        const passwordMatch = await bcrypt.compare(password, nbmFound.password);
    
        if (!passwordMatch) throw new Error("password not match");
        const payload = {
                name: nbmFound.name,
                nbm,
                role: nbmFound.role
            }
        // sign to jsonwebtoken used for user authentication.
        const token = jwt.sign(payload, process.env.TOKEN_SECRET,
            {
              expiresIn: '24h',
              algorithm: 'HS256'
            })

        const data = {
            userData : {
                name: nbmFound.name,
                nbm,
                role: nbmFound.role
            },
            token 
        }

        return res.status(201).send(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
};

export const intRegister = async(req, res) => {

    const { name, nbm, password, role } = req.body;

    try {

        if (!name || !nbm || !password || !role) {
            throw new Error("Please enter a nmae, role, nik and password");
        }

        const nbmFound = await auth.countDocuments({ nbm: nbm });
        if (nbmFound != 0) throw new Error("NBM is already registered");

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        // Hash the password using the generated salt
        const passwordHash = await bcrypt.hash(password, salt);

        const params = {
            name,
            nbm,
            password: passwordHash,
            role  // role : 'admin', 'guru', 'staff'
        }

        await auth.create(params);

        return res.status(201).send({ message: "success to register" });

    } catch (error) {
        res.status(500).send({ message: error.message});
    }

};

