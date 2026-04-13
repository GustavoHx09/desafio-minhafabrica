import express from "express";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());

// aqui eu centralizo todas as rotas...
app.use('/api/v1', routes);

export default app;