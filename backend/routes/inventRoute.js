import express from "express";
import {
    createInventaris, 
    deleteInventaris, 
    getInventaris, 
    getInventarisById, 
    updateInventaris
} from "../controllers/inventController.js"

const router = express.Router();

router.get('/inventaris', getInventaris);
router.get('/inventaris/:serialnumber', getInventarisById);
router.post('/inventaris', createInventaris);
router.patch('/inventaris/:id', updateInventaris);
router.delete('/inventaris/:id', deleteInventaris);

export default router;