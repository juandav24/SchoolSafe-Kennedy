import express from "express";
import cors from "cors";
import schoolSafeRoutes from "./routes/schoolSafe.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", schoolSafeRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});