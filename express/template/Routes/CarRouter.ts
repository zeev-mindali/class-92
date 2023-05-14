import express, { NextFunction, Request, Response } from "express";
import axios from "axios";
const carURL =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=0866573c-40cd-4ca8-91d2-9dd2d7a492e5&q=";
const carRouter = express.Router();

carRouter.get(
  "/find/:carNumber",
  async (request: Request, response: Response, next: NextFunction) => {
    const carNumber = request.params.carNumber;
    axios
      .get(carURL + carNumber)
      .then((dataResponse) => {
        console.log(dataResponse.data.result.records[0]);
        response.status(200).json(dataResponse.data.result.records[0]);
      })
      .catch((err) => console.log(err));
  }
);

export default carRouter;
