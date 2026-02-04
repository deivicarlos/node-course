import { Request, Response } from "express";
import { planets } from "../../models/planets.model";

export const getAllPlanets = (_req: Request, resp: Response) => {
  return resp.status(200).json(planets);
};
