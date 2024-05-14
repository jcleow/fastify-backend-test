import { FastifyInstance} from 'fastify';
import { findUser, findUserById } from '../store/repositories/user.repository';
import { findUserByIdController, findUserController } from '../controllers/users.controllers'

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
