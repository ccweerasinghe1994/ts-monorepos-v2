import cors from 'cors'
import express from 'express'
import { ServerConfig, type ServerConfigParams } from './config.js'
import { createRouter } from './routes.js'

const createRequestLoggingMiddleware = (cfg: ServerConfig): express.RequestHandler => {
	return (req, res, next) => {
		cfg.logger.info(`${req.method} ${req.url}`)
		next()
	}
}

export function initApp(config: ServerConfigParams = {}): {
	app: express.Application
	cfg: ServerConfig
} {
	const cfg = new ServerConfig(config)
	const app = express()
	app.use(cors({ origin: '*' }))
	app.use(createRequestLoggingMiddleware(cfg))
	app.use('/api', createRouter(cfg))

	return { app, cfg }
}
