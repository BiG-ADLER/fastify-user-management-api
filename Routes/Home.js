import JWT from "jsonwebtoken";
import Admin from "../Schemas/Body/Admin.js"
import Users from "../Schemas/Body/Users.js"
const { verify } = JWT

export default async function Route(fastify, options) {
    const collection = fastify.mongo.db.collection('users')
    
    fastify.get('/', function (request, reply) {
        reply.send({
            message: `Hello world`
        })
    })

    fastify.get('/users', { body: Admin }, async (request, reply) => {
        const result = await collection.find().toArray()
        if (result.length === 0) {
            throw new Error('No documents found')
        }
        return result

    })

    fastify.get('/users/:username', async (request, reply) => {
        const Username = request.params.username
        const result = await collection.findOne({ Username: Username })
        if (!result) {
            throw new Error(`User (${Username}) not exist.`)
        }
        return result
    })

    fastify.post('/users/create', { body: Users }, async (request, reply) => {
        const result = await collection.insertOne({
            FirstName: request.body.FirstName,
            LastName: request.body.LastName,
            Username: request.body.Username,
            Password: request.body.Password,
            Email: request.body.Email,
            PhoneNumber: request.body.PhoneNumber || 10000000000
        })
        reply.send({
            message: 'Account has been created',
            data: result
        })
    })
}
