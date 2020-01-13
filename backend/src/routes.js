const express = require('express')
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')

const routes = express.Router()
//GET, POST, PUT, DELETE

routes.get('/', (req, res) => {
    return res.json({ message: "hello " })
})

routes.post('/devs', (req, res) => {
    return res.json(req.body)
})

routes.post('/devs', DevController.store)
routes.post('/devs/:devId/likes', LikeController.store)
module.exports = routes