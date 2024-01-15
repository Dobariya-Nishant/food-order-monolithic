import type { NextFunction, Request, Response } from "express";

type RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<any>;

export function asyncHndler(requestHandler: RequestHandler) {
  return function fn(req: Request, res: Response, next: NextFunction) {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
}
