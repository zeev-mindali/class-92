import { NextFunction, Request, Response } from "express";

function catchAll(
  err: any,
  request: Request,
  response: Response,
  next: NextFunction
): void {
  response.status(err.status || 500).send(err.message);
}

export default catchAll;
