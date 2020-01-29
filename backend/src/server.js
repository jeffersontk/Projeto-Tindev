const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const connectedUsers = {}

io.on('connection', socket => {
    const { user } = socket.handshake.query
    connectedUsers[user] = socket.id
})

mongoose.connect('mongodb+srv://userAdmin:adminUser@cluster0-mzpo4.mongodb.net/bd-omnistack8?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })

app.use((req, res, next) => {
    req.io = io
    req.connectedUsers = connectedUsers

    return next()
})

app.use(cors())
app.use(express.json())
app.use(routes)

console.log('servidor rodando na porta 3333, http://localhost:3333')
server.listen(3333)