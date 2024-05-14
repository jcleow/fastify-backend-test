import Fastify from 'fastify'
import pino from 'pino'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import loginRouter from './routes/login.routes'

const port = 8080
const startServer = async () => {
  try{
    const server = Fastify({
      logger: pino({level: 'info'})
    }).withTypeProvider<TypeBoxTypeProvider>()
    

    // Register routes
    server.register(loginRouter, {prefix: '/api/v1/login'})
    

    await server.listen({port: port})
  } catch(e) {
    console.error(e)
  }
}

startServer()