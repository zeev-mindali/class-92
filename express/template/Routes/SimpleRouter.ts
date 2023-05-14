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
    response.status(200).json(sendOK("GET"));
  }
);

router.get(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(sendBAD("GET"));
  }
);

//delete
router.delete(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(sendOK("DELETE"));
  }
);

router.delete(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(sendBAD("DELETE"));
  }
);

//post - object JSON
router.post(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(sendOK("POST", request.body));
  }
);

router.post(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(404).json(sendBAD("POST"));
  }
);

//put
router.put(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(sendOK("PUT"));
  }
);
router.put(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(sendBAD("PUT"));
  }
);

export default router;
