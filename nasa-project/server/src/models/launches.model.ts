export type Launch = {
  flightNumnber: number;
  mission: string;
  rocket: string;
  launchDate: Date;
  destination: string;
  customer: string[];
  upcoming: boolean;
  success: boolean;
};

let latestMissionId = 100;

const launches: Map<number, Launch> = new Map();

const sampleLaunch: Launch = {
  flightNumnber: latestMissionId,
  mission: "Kepler Exploration X",
  rocket: "Jericho XL 3X",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(sampleLaunch.flightNumnber, sampleLaunch);

export const getAllLaunches = () => {
  return Array.from(launches.values());
};

export const addNewLaunch = (launch: Launch) => {
  latestMissionId++;
  launches.set(latestMissionId, {
    ...launch,
    flightNumnber: latestMissionId,
    customer: ["Zero to Mastery", "NASA"],
    upcoming: true,
    success: true,
  });
};
