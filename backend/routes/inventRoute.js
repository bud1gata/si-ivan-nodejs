import express from "express";
import {createInventaris, deleteInventaris, getInventaris, getInventarisBySerial, updateInventaris} from "../controllers/inventController.js"

const router = express.Router();

router.get('/inventaris', getInventaris);
router.get('/inventaris/:id', getInventarisBySerial);
router.post('/inventaris', createInventaris);
router.patch('/inventaris/:id', updateInventaris);
router.delete('/inventaris/:id', deleteInventaris);

export default router;