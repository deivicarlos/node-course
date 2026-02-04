import dotenv from "dotenv";
import { loadPlanets } from "./models/planets.model";
import app from "./app";

dotenv.config({ path: ".env" });

const PORT = Number(process.env.PORT || 8000);

const startServer = async () => {
  await loadPlanets();

  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}.....`);
  });
};

startServer();
