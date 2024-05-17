import Fastify from 'fastify'
import pino from 'pino'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import loginRouter from './routes/login.routes'
import {getUserById, getUser, createUser} from './routes/user.routes'

const port = 8080

const API_V1 = '/api/v1'

const startServer = async () => {
  const server = Fastify({
    logger: pino({level: 'info'})
  }).withTypeProvider<TypeBoxTypeProvider>()
  try{
    // Register routes
    await server.register(loginRouter, {prefix: API_V1})
    await server.register(getUserById, {prefix: API_V1})
    await server.register(getUser, {prefix: API_V1})
    await server.register(createUser, {prefix: API_V1})


    await server.listen({port: port})
  } catch(e) {
    console.error(e)
  }
}



startServer()