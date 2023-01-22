import { Router } from "express";
import { addPlayer, getAllPlayers, getPlayerById, updateScore } from "../controllers/player.js";

export const playerRouter = Router()

playerRouter.get('/all', getAllPlayers)
playerRouter.get('/:id', getPlayerById)
playerRouter.post('/new', addPlayer)
playerRouter.put('/update/:id', updateScore)