import { Request, Response } from "express";
import { getAllPlanets } from "../../models/planets.model";

export const htttGetAllPlanets = (_req: Request, resp: Response) => {
  return resp.status(200).json(getAllPlanets());
};
