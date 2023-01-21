import { Router } from "express";
import { playerRouter } from "./player.js";

export const routeHandler = Router()

routeHandler.use('/player', playerRouter)