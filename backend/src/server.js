const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

console.log('servidor rodando na porta 3333, http://localhost:3333')
app.listen(3333)