import {FastifyReply, FastifyRequest} from "fastify"
import { UserType } from "../models/User";
export const loginController = async (
    request: FastifyRequest<{Body: UserType}>,
    reply: FastifyReply
) => {
    const { username, email } = request.body;
    reply.status(200).send({ username, email });
  }