import { NextFunction, Request, Response } from "express";
import { RouteNotFoundError } from "../4-models/error-models";

function routeNotFound(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const err = new RouteNotFoundError(request.originalUrl);
  next(err);
}

export default routeNotFound;
