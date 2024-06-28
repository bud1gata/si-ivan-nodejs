import express from "express";
import {
    createInventaris, 
    deleteInventaris, 
    getInventaris, 
    getInventarisById, 
    updateInventaris
} from "../controllers/inventController.js"
import { 
    intLogin, 
    intRegister 
} from "../controllers/authController.js";
import verifyToken from "../middleware/verifyToken.js"

const router = express.Router();

router.get('/inventaris', verifyToken, getInventaris);
router.get('/inventaris/:serialnumber', verifyToken, getInventarisById);
router.post('/inventaris', verifyToken, createInventaris);
router.patch('/inventaris/:id', verifyToken, updateInventaris);
router.delete('/inventaris/:id', verifyToken, deleteInventaris);
router.post('/login', intLogin);
router.post('/register', intRegister);


export default router;