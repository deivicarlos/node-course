import { Router } from "express";
import { getAllPlanets } from "./planets.controller";

const planetRouter = Router();

planetRouter.get("/planets", getAllPlanets);

export { planetRouter };
