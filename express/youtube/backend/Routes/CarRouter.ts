import express, { NextFunction, Request, Response } from "express";
import { carInfo } from "../Logic/CarFinder";
const carRouter = express.Router();

carRouter.get(
  "/find/:carNumber",
  async (request: Request, response: Response, next: NextFunction) => {
    const carNumber = request.params.carNumber;
    response.status(200).json(carInfo(carNumber));
  }
);

export default carRouter;
