import { prisma } from "../lib/prisma.js"

export const getAllPlayers = async (req, res, next) => {
	try {
		const allItems = await prisma.player.findMany({
			
		})

		res.json({
			message: 'All items fetched',
			allItems
		})
	}
	catch (err) {
		res.status(404).json({
			error: 'Some error occurred',
			message: err.message
		})
	}
}

export const addPlayer = async (req, res, next) => {
	const { username, score } = req.body

	try {
		const item = await prisma.player.create({
			data: {
				username: username,
				score: score
			}
		})

		res.json({
			message: 'Score added',
			user: item
		})
	}

	catch(err) {
		next(err)
	}
}

export const updateScore = async (req, res, next) => {
	const { id } = req.params
	const { score } = req.body

	try {
		const updatedPlayer = await prisma.player.update({
			where: {
				id: id
			},
			data: {
				score: score
			}
		})

		res.json({
			message: 'High score updated',
			updatedPlayer: updatedPlayer
		})
	}
	catch(err) {
		next(err)
	}
}

export const getPlayerById = async (req, res, next) => {
	const { id } = req.params

	try {
		const player = await prisma.player.findFirstOrThrow({
			where: {
				id: id
			}
		})

		res.json({
			message: 'Player fetched',
			player: player
		})
	}
	catch(err) {
		next(err)
	}
}