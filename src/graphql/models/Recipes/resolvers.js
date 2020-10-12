const db = require('../../../database')
module.exports = {
  Query: {
    recipes: () => db.recipes,
    recipe(_, args) {
      const { id, category } = args
      if (id) return db.recipes.find(recipe => recipe.id === id)
      return db.recipes.find(recipe => recipe.category === category)
    }
  },
  Mutation: {
    createRecipe(_, { data }) {
      const { title } = data
      const titleList = db.recipes
      const newRecipe = {
        ...data,
      }
      db.recipes.push(newRecipe)
      return newRecipe
    },
    updateRecipe(_, { id, data }) {
      const recipe = db.recipes.find(recipe => recipe.id === id)
      const index = db.recipes.findIndex(recipe => recipe.id === id)
      const newRecipe = {
        ...recipe,
        ...data
      }
      db.recipes.splice(index, 1, newRecipe)
      return newRecipe;
    },
    deleteRecipe(_, { filter: { id, title } }) {

      return deleteFilteredRecipe(id ? { id } : { title })
    }
  }
}

function deleteFilteredRecipe(filter) {
  const key = Object.keys(filter)[0]
  const value = Object.values(filter)[0]

  const selectedRecipe = db.recipes.find(recipe => recipe[key] === value)
  db.recipes = db.recipes.filter(recipe => recipe[key] !== value)

  return !!selectedRecipe
}