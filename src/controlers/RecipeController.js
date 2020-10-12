const Recipe = require('../models/Recipes')

module.exports = {
  async store(req, res) {
    const { id, name, quantity, measure, observation } = req.body;

    const recipe = await Recipe.create({
      name, quantity, measure, observation
    })
    return res.json(recipe)
  }
}