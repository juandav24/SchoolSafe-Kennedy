"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerReportes = void 0;
const report_service_1 = require("../services/report.service");
const obtenerReportes = (req, res) => {
    const reportes = (0, report_service_1.obtenerListaReportes)();
    res.json(reportes);
};
exports.obtenerReportes = obtenerReportes;
