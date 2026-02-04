import { parse } from "csv-parse";
import fs from "fs";
import path from "path";

type Planet = {
  [key: string]: string;
};

const habitablePlanets: Planet[] = [];

function isHabitablePlanet(planet: Planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    Number(planet["koi_insol"]) > 0.36 &&
    Number(planet["koi_insol"]) < 1.11 &&
    Number(planet["koi_prad"]) < 1.6
  );
}

export const loadPlanets = () => {
  return new Promise((resolve, reject) =>
    fs
      .createReadStream(
        path.join(__dirname, "..", "..", "data", "kepler_data.csv"),
      )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        }),
      )
      .on("data", (data: Planet) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("error", (err: Error) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(
          habitablePlanets.map((planet) => {
            return planet["kepler_name"];
          }),
        );
        console.log(`${habitablePlanets.length} habitable planets found!`);
        resolve(habitablePlanets);
      }),
  );
};

export { habitablePlanets as planets };
