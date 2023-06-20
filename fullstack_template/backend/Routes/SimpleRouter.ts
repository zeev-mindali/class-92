import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

//POST Method check
router.post(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(`{"msg":"OK"}`);
  }
);

router.post(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(`{"msg":"Error"}`);
  }
);

//GET Method check
router.get(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(`{"msg":"OK"}`);
  }
);

router.get(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(`{"msg":"Error"}`);
  }
);

//PUT Method check
router.put(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(`{"msg":"OK"}`);
  }
);

router.put(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(`{"msg":"Error"}`);
  }
);

//DELETE method
router.delete(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(`{"msg":"OK"}`);
  }
);

router.delete(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(`{"msg":"Error"}`);
  }
);

export default router;
