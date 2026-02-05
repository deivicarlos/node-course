import { Router } from "express";
import { htttGetAllPlanets } from "./planets.controller";

const planetRouter = Router();

planetRouter.get("/", htttGetAllPlanets);

export { planetRouter };
