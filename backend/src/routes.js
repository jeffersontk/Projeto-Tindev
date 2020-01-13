const express = require('express')

const routes = express.Router()
//GET, POST, PUT, DELETE

routes.get('/', (req, res) => {
    return res.json({ message: "hello " })
})

routes.post('/devs', (req, res) => {
    return res.json(req.body)
})

module.exports = routes