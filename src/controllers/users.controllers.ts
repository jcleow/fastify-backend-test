import {FastifyReply, FastifyRequest} from "fastify"
import { UserType } from "../models/User";
import { findUserById, findUser } from "../store/repositories/user.repository";

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