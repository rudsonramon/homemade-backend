const express = require('express')
const RecipeController = require('./controlers/RecipeController')

const routes = express.Router()

//routes.get('/recipes', RecipeController.index)
routes.post('/recipes', RecipeController.store)

module.exports = routes