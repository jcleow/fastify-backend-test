import { FastifyInstance} from 'fastify';
import { findUser, findUserById } from '../store/repositories/user.repository';
import { findUserByIdController, findUserController, createUserController } from '../controllers/users.controllers'

export async function getUserById(fastify: FastifyInstance){
  fastify.get(
    '/user/:id', 
    findUserByIdController
  )
}

const getUserOpts = {
    schema: {
      querystring: {
        id: {type: 'string'},
        username: { type: 'string' },
        email: { type: 'string' }
    }
  }
}

//fastify.get(path, [options], handler)
export async function getUser(fastify: FastifyInstance){
  fastify.get('/user', getUserOpts, findUserController)
}

// To further split all of these POST/PUT schema bodies into another separate file

const createUserSchema = {
  type: 'object',
  required: ['username', 'email'],
  properties: {
    'id': {type: 'string'},
    'username': {type: 'string'},
    'email': {type: 'string'}
  }
}

const createUserOpts = {
  schema: {
    body: createUserSchema
  }
}

export async function createUser(fastify: FastifyInstance){
  fastify.post('/user', createUserOpts, createUserController)
}