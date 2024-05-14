import { FastifyInstance } from "fastify";
import { loginUserSchema } from "../schema/login.schema";
import { loginController } from "../controllers/login.controllers";

async function loginUser(fastify: FastifyInstance){
  fastify.post(
      '/login',
      loginUserSchema,
      loginController
    )
}

export default loginUser