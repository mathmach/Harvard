const express = require('express')

const UserController = require('./controllers/UserController')
const HospitalController = require('./controllers/HospitalController')
const DonationController = require('./controllers/DonationController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.post('/user', UserController.create)

routes.post('/donation', DonationController.create)

routes.get('/hospital/:id', HospitalController.findById)
routes.get('/hospitals', HospitalController.index)

module.exports = routes