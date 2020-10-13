'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
    await queryInterface.bulkInsert('Recipe', [{
      title: 'Carne de panela',
      author: 'Ana Maria',
      link: 'www.melhoresreceitas.com',
      category: 'Saldaga',
      subcategory: 'Entrada'
    }, {
      title: 'Carne moida ao molho',
      author: 'Joel Azevedo',
      link: 'www.receitascaseiras.com',
      category: 'Saldaga',
      subcategory: 'Prato Principal'
    }, {
      title: 'Nhoque ao sugo',
      author: 'Andre Vieira',
      link: 'www.receitaagora.com',
      category: 'Saldaga',
      subcategory: 'Prato Principal'
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete('Recipe', null, {});

  }
};
