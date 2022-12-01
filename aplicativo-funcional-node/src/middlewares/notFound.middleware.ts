import {Request, Response} from "express";

export const notFoundHandler = (request: Request, response: Response) => {

    const message = {status: 404, message: "Resource not found"};

    response.status(404).send(message);
};