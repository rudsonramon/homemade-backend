const express = require('express')
const RecipeController = require('./controlers/RecipeController')

const routes = express.Router()

routes.post('/ingredients', RecipeController.store)

module.exports = routes