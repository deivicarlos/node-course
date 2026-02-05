import express from "express";
import cors from "cors";
import { planetRouter } from "./routes/planets/planets.router";
import path from "path";
import morgan from "morgan";
import { launchesRouter } from "./routes/launches/launches.router";

const app = express();

app
  .use(express.static(path.join(__dirname, "..", "public")))
  .use(cors())
  .use(morgan("combined"))
  .use(express.json())
  .use("/planets/", planetRouter)
  .use("/launches", launchesRouter);

// app.get("/*", (req, resp) => {
//   return resp.sendFile(path.join(__dirname, "..", "public", "index.html"));
// });
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

export default app;
