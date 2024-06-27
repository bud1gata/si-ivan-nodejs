import express from "express";
import {getInventaris} from "../controllers/inventController.js"

const router = express.Router();

router.get('/inventaris', getInventaris);

export default router;