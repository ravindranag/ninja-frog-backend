import express, { json } from 'express'
import 'dotenv/config'
import { checkStatus } from './controllers/status.js'
import { errorHandler } from './lib/error.js'
import { routeHandler } from './routes/routeHandler.js'
import morgan from 'morgan'

const port = process.env.PORT || 8000

const app = express()
app.use(json())
app.use(morgan('dev'))

app.get('/status', checkStatus)

app.use(routeHandler)

app.use(errorHandler)

app.listen(port, (err) => {
	if(err) {
		console.error(err)
	} else {
		console.log('Server listening on port ' + port + ' 🚀')
	}
})