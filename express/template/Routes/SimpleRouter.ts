//import
import express, { NextFunction, Request, Response } from "express";
import { Test } from "../Models/Test";

const router = express.Router();

// http://localhost:4000/api/v1/checkOK
// http://localhost:4000/api/v1/checkBAD

//POST, GET, PUT, DELETE
//CRUD - Create,Read,Update,Delete

//GET
router.get(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    let test = new Test("All is OK");
    response.status(200).json(test);
  }
);

router.get(
  "/checkBad",
  async (request: Request, response: Response, next: NextFunction) => {
    let test = new Test("All is BAD");
    response.status(400).json(test);
  }
);
