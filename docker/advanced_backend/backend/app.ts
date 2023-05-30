import express, { Request, Response } from "express";
import routeNotfound from "./3-middleware/route-not-found";
import catchAll from "./3-middleware/catach-all";
import productsController from "./6-controllers/products-controller";

const server = express();
server.use(express.json());
server.get("/", (request: Request, response: Response) =>
  response.send("<h1>Welcome to our NorthWind API</h1>")
);
server.use("/api", productsController);
server.use("*", routeNotfound);
server.use(catchAll);

server.listen(process.env.PORT, () =>
  console.log(`Listening on http://localhost:${process.env.PORT}`)
);
