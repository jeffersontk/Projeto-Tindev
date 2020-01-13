const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://userAdmin:adminUser@cluster0-mzpo4.mongodb.net/bd-omnistack8?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
app.use(express.json())
app.use(routes)

console.log('servidor rodando na porta 3333, http://localhost:3333')
app.listen(3333)