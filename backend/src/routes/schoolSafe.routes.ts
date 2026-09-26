import { Router } from "express";
import { obtenerReportes } from "../controllers/report.controller";

const router = Router();

router.get("/reportes", obtenerReportes);

export default router;