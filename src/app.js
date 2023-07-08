import express from "express";
import cors from "cors";
import morgan from "morgan";
import usuariosRoutes from "./routes/usuarios.routes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));

// Endpoints
app.use("/api/v1/usuarios", usuariosRoutes);

// Rutas no definidas
app.all("*", (req, res) => {
  res.status(404).send("Ruta no encontrada");
});

export default app;