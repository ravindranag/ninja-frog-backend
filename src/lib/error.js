import { PRISMA_ERROR_UNIQUE_CONSTRAINT, PRISMA_ERROR_CLIENT_ERROR } from "./constants.js"

export const errorHandler = async (err, req, res, next) => {
	console.log(err)
	let statusCode = 500

	if(err.code === PRISMA_ERROR_UNIQUE_CONSTRAINT) {
		err.message = `${err.meta.target} should be unique`
		statusCode = 400
	}

	if(err.code === PRISMA_ERROR_CLIENT_ERROR) {
		err.message = `${err.meta?.cause || 'Not Found'}`
		statusCode = 400
	}

	res.status(statusCode).json({
		error: 'Error handling request',
		message: err.message
	})
}