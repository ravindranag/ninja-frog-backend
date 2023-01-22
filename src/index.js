import express, { json, urlencoded } from 'express'
import 'dotenv/config'
import { checkStatus } from './controllers/status.js'
import { errorHandler } from './lib/error.js'
import { routeHandler } from './routes/routeHandler.js'
import morgan from 'morgan'
import multer from 'multer'

const upload = multer()

const port = process.env.PORT || 8000

const app = express()
app.use(json())
app.use(urlencoded({
	extended: true
}))
app.use(upload.none())
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