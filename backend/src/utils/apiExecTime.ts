import { Request, Response, NextFunction } from "express";

export const startTimeMiddleware = (req: any, res: Response, next: NextFunction) => {
    req.startTime = new Date();
    next();
};

export const endTimeMiddleware = (req: any, res: Response, next: NextFunction) => {
    const endTime = new Date();
    const executionTime = endTime.getTime() - req.startTime.getTime();
    console.log(`API execution time: ${executionTime}ms`);
    next();
};
