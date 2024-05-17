import {FastifyReply, FastifyRequest} from "fastify"
import {  User, UserType } from "../models/User";
import { findUserById, findUser, createUser } from "../store/repositories/user.repository";
const shortuuid = require('short-uuid')

interface IFindUserByIdParams {
    id: string
  }  

export const findUserByIdController = async (
    request: FastifyRequest<{Params: IFindUserByIdParams}>,
    reply: FastifyReply
) => {
    try {
        const {id} = request.params
        const res = await findUserById(id)
        reply.status(201).send(res)
      } catch(e){
          reply.status(500).send(e)
      }   
}

interface IFindUserQuerystring {
    id: string | undefined
    username: string | undefined
    email: string | undefined
  }
  
export const findUserController = async (
    request: FastifyRequest<{Querystring: IFindUserQuerystring}>, 
    reply: FastifyReply
) => {
    try {
      const {id, username, email} = request.query
      const res = await findUser({id, username, email})
      reply.status(201).send(res)
    } catch(e){
        reply.status(500).send(e)
    }
}

export const createUserController = async (
    request: FastifyRequest<{Body: UserType}>,
    reply: FastifyReply
) => {
    try {
        const {username, email} = request.body
        const res = await createUser({
            id: shortuuid.generate(),
            username: username,
            email:email
        })

        console.log(res,'res')
        reply.status(201).send(res)
    } catch(e){
        reply.status(500).send(e)
    }
}
