import express from "express";
import {
    createInventaris, 
    deleteInventaris, 
    getInventaris, 
    getInventarisById, 
    updateInventaris
} from "../controllers/inventController.js"
import { intLogin, intRegister } from "../controllers/authController.js";

const router = express.Router();

router.get('/inventaris', getInventaris);
router.get('/inventaris/:serialnumber', getInventarisById);
router.post('/inventaris', createInventaris);
router.patch('/inventaris/:id', updateInventaris);
router.delete('/inventaris/:id', deleteInventaris);
router.post('/login', intLogin);
router.post('/register', intRegister);


export default router;