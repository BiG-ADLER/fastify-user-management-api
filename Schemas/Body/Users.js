const Users = {
    type: 'object',
    required: ['FirstName', 'LastName', 'Username', 'PhoneNumber', 'Password', 'Email'],
    properties: {
        FirstName: { type: 'string' },
        LastName: { type: 'string' },
        Username: { type: 'string' },
        Password: { type: 'string'},
        Email: { type: 'string' },
        PhoneNumber: { type: 'number' }
    },
    primaryKey: 'Username',
}

export default Users