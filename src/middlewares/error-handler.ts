import express, { NextFunction, Request, Response } from "express";

import { HttpExceptions } from "../interfaces/exceptions";

const errorHandler = (err: HttpExceptions, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({ message: err.msg || "Internal Server Error" });
};
export default errorHandler;
