import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from '@fastify/mongodb'

async function Database(fastify, options) {
    fastify.register(fastifyMongo, {
        url: 'mongodb+srv://bigadler:Armanm13529600@mysticworldbot.cudb3qa.mongodb.net/fastify'
    })
}

export default fastifyPlugin(Database)