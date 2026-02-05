import { Request, Response } from "express";
import {
  addNewLaunch,
  getAllLaunches,
  Launch,
} from "../../models/launches.model";

export const httpGetAllLaunches = (_req: Request, res: Response) => {
  return res.status(200).send(getAllLaunches());
};

export const httpAddNewLaunch = (req: Request, res: Response) => {
  const launch = {
    ...req.body,
    launchDate: new Date(req.body.destination),
  } as Launch;

  addNewLaunch(launch);

  return res.status(201).send(launch);
};
