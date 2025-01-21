import Fastify from "fastify";
import Start from "./Modules/Start.js";
import Home from "./Routes/Home.js";
import Database from "./Classes/Database/Database.js";

const fastify = Fastify({
    logger: false
})

fastify.register(Database)
fastify.register(Home, { prefix: 'api/v1' })

Start(fastify)