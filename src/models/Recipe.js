const {
  Model, DataTypes
} = require('sequelize');

class Recipes extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
      },
      title: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      author: DataTypes.STRING,
      link: DataTypes.STRING,
      category: DataTypes.STRING,
      subcategory: DataTypes.STRING,
    }, {
      sequelize
    })
  }
};

module.exports = Recipes