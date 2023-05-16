import express, { NextFunction, Request, Response } from "express";
import { getAllSongs, getSongById } from "../Logic/SongsLogic";

const songRouter = express.Router();

songRouter.get(
  "/listSongs",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("in song route");
    return response.status(200).json(await getAllSongs());
  }
);

songRouter.get(
  "/songById/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const songID = +request.params.id;
    return response.status(200).json(await getSongById(songID));
  }
);

export default songRouter;
