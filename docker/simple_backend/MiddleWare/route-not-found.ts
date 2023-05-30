//import
import { Request, Response, NextFunction } from "express";

//error->modal
import { RouteNotFound } from "../Models/Clients-Errors";

//middle ware function
const ErrorHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const err = new RouteNotFound(request.originalUrl);
  next(err);
};

export default ErrorHandler;

