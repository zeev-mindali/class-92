//import
import express, { NextFunction, Request, Response } from "express";
import { Test } from "../Models/Test";
import { sendBAD, sendOK } from "../Logic/TestLogic";

const router = express.Router();

// http://localhost:4000/api/v1/checkOK
// http://localhost:4000/api/v1/checkBAD

//POST, GET, PUT, DELETE
//CRUD - Create,Read,Update,Delete

//GET
router.get(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(sendOK());
  }
);

router.get(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(sendBAD());
  }
);

//delete
router.delete(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    let test = new Test("delete - All is OK");
    response.status(200).json(test);
  }
);

router.delete(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    let test = new Test("delete - All is BAD");
    response.status(400).json(test);
  }
);

//post - object JSON
router.post(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    let test = new Test("post - All is OK");
    console.log(request.body);
    response.status(200).json(test);
  }
);

router.post(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    let test = new Test("post - all is BAD");
    response.status(404).json(test);
  }
);

//put
router.put(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    let test = new Test("put - All is OK");
    response.status(200).json(test);
  }
);
router.put(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    let test = new Test("put - All is BAD");
    response.status(400).json(test);
  }
);

export default router;
