import Fastify from 'fastify'
import pino from 'pino'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import loginRouter from './routes/login.routes'
import {getUserById, getUser, createUser} from './routes/user.routes'
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

const port = 8080
const API_V1 = '/api/v1'

// Set up swagger: https://stackoverflow.com/a/76170934
const swaggerOptions = {
  swagger: {
      info: {
          title: "Sales Inventory Dashboard APIs",
          description: "",
          version: "1.0.0",
      },
      host: "localhost",
      schemes: ["http", "https"],
      consumes: ["application/json"],
      produces: ["application/json"],
      tags: [{ name: "Default", description: "Default" }],
  },
};

const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};

const startServer = async () => {
  const server = Fastify({
    logger: pino({level: 'info'})
  }).withTypeProvider<TypeBoxTypeProvider>()
  try{
    // Register Swagger
    await server.register(fastifySwagger, swaggerOptions);
    await server.register(fastifySwaggerUi, swaggerUiOptions);

    // Register routes
    await server.register(loginRouter, {prefix: API_V1})
    await server.register(getUserById, {prefix: API_V1})
    await server.register(getUser, {prefix: API_V1})
    await server.register(createUser, {prefix: API_V1})

    await server.ready()
    await server.listen({port: port})
    server.swagger()
  } catch(e) {
    console.error(e)
  }
}

startServer()