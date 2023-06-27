//importation
import { Request, Response, NextFunction } from "express";
//error->model
import { RouteNotFoundError } from "../Models/client-errors";

//middleware function
const ErrorHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const err = new RouteNotFoundError(request.originalUrl);
  next(err);
};

export default ErrorHandler;
//all we hear from you is blah blah blah blah
