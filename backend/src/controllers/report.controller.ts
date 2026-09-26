import { Request, Response } from "express";
import { obtenerListaReportes } from "../services/report.service";

export const obtenerReportes = (req: Request, res: Response) => {
    const reportes = obtenerListaReportes();

    res.json(reportes);
};