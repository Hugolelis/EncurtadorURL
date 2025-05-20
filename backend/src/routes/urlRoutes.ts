// modules
import { FastifyInstance, FastifyPluginOptions } from "fastify";

// controller
import { UrlController } from "../controllers/UrlController";

// router
export async function urlRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/teste', UrlController.teste)
}