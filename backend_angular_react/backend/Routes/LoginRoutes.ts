import express, { NextFunction, Request, Response } from "express";
import User from "../Models/User";
import userLogic from "../Logic/LoginLogic";

const loginRouter = express.Router();


// addUser, deleteUser, updateUser, checkLogin, getUserList
loginRouter.post(
    "add",
    async (request: Request, response: Response, next: NextFunction) => {
        const newUser: User = request.body;
        return response.status(201).json(await userLogic.addUser(newUser));
    }
)

loginRouter.delete(
    "delete/:id",
    async (request: Request, response: Response, next: NextFunction) => {
        const userId: number = +request.params.id;
        return response.status(204).json(await userLogic.deleteUser(userId));
    }
)

loginRouter.put(
    "update",
    async (request: Request, response: Response, next: NextFunction) => {
        const updateUser: User = request.body;
        return response.status(201).json(await userLogic.updateUser(updateUser));
    }
)

loginRouter.post(
    "checkLogin",
    async (request: Request, response: Response, next: NextFunction) => {
        const userLogin: User = request.body;
        if (await userLogic.checkLogin(userLogin)) {
            return response.status(200).json("ok");
        }
        return response.status(401).json("bad");
    }
)

loginRouter.get(
    "getAll",
    async (request: Request, response: Response, next: NextFunction) => {
        return response.status(200).json(await userLogic.getUserList());
    }
)

export default loginRouter;