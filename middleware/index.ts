import { Request, Response, NextFunction} from "express";

export const idChecker = (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    const newId: number= +id

    if(newId > 0) next();

    res.status(400).json({message: "Id tidak valid"})
};
