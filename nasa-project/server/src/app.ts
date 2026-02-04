import express from "express";
import cors from "cors";
import { planetRouter } from "./routes/planets/planets.router";

const app = express();

app.use(cors()).use(express.json()).use(planetRouter);

export default app;
