export const checkStatus = async (req, res, next) => {
	res.json({
		message: 'Server running'
	})
}