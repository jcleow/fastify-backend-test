import {FastifyReply, FastifyRequest} from "fastify"
import { UserType } from "../models/User";
export const loginController = async (
    request: FastifyRequest<{Body: UserType}>,
    reply: FastifyReply
) => {
    const { name, mail } = request.body;
    reply.status(200).send({ name, mail });
  }