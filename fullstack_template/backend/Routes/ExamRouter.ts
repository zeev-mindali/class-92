import express, { NextFunction, Request, Response } from "express";
import { getAll } from "../Logic/SimpleLogic";

const routerExam = express.Router();

//POST Method check
routerExam.get(
    "/all",
    async (request: Request, response: Response, next: NextFunction) => {
        response.status(200).json(await getAll());
    }
);

export default routerExam;