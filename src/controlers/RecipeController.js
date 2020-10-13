const Recipes = require('../models/Recipe');

module.exports = {
  async index(req, res) {
    const recipe = await Recipes.create({
      id,
      title,
      author,
      link,
      category,
      subcategory,
    })
    return res.json(recipe)
  },

  async store(req, res) {
    const { id, name, quantity, measure, observation } = req.body;

    const recipe = await Recipe.create({
      name, quantity, measure, observation
    })
    return res.json(recipe)
  }
}