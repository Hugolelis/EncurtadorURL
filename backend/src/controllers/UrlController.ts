// models
import { Url } from '../models/Url';

// modules
import { FastifyRequest, FastifyReply } from 'fastify';

// interfaces


export class UrlController{
    static async teste(req: FastifyRequest, reply: FastifyReply) {
        reply.code(200).send({ msg: 'Testado com sucesso!' })
    }
}