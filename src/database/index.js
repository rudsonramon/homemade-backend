
const Sequelize = require('sequelize')
const dbConfig = require('../../config/config.json')

const Recipe = require('../models/Recipe')

const connection = new Sequelize(dbConfig.development)

Recipe.init(connection)

module.exports = connection
  /*

module.exports = {
recipes: [
{
id: 1,
title: 'Carne Assada',
author: 'Emilia Gonzales',
link: 'https://www.tudogostoso.com.br/receita/71022-carne-assada.html',
category: 'Salgada',
subcategory: 'Carne',
ingredients: [{ id: 1, name: 'alcatra', quantity: 1.2, measure: 'kg', observation: '(peça inteira com um buraco no meio)' }, { id: 2, name: 'bacon', quantity: 1, measure: 'pedaço', observation: '(do tamanho da carne)' }, { id: 3, name: 'linguiça', quantity: 1, measure: 'gomo', observation: 'paio ou calabresa' }, { id: 4, name: 'Alho', quantity: 0, measure: 'a gosto', observation: '' }, { id: 5, name: 'Sal', quantity: 0, measure: 'a gosto', observation: '' }, { id: 6, name: 'pimenta', quantity: 0, measure: 'a gosto', observation: '' }, { id: 7, name: 'Salsa picada', quantity: 0, measure: 'a gosto', observation: '' }, { id: 8, name: 'manjericão', quantity: 0, measure: 'pitada', observation: '' }, { id: 9, name: 'vinagre', quantity: 2, measure: 'colher', observation: '' }],
preparationMode: [{ step: 1, description: 'Misture o alho, pimenta, salsa, vinagre e o manjericão.' }, { step: 2, description: 'Depois coloque os pedaços de bacon e a linguiça dentro da carne.' }, { step: 3, description: 'Com a mistura tempere a carne e reserve por, no mínimo, 40 minutos.' }, { step: 4, description: 'Depois coloque a carne em uma assadeira untada com óleo (3 colheres).' }, { step: 5, description: 'Coloque manteiga por cima da carne e forre com papel alumínio.' }, { step: 6, description: 'Leve ao forno e depois de 1 hora retire o papel.' }, { step: 7, description: 'Marinar a carne até dourar.' }, { step: 8, description: 'Se achar necessário, dissolva um caldo de carne e marine com isso até dourar.' }, { step: 9, description: 'Se preferir cozinhe uma batatas calabresas e na hora em que a carne estiver dourando adicione as batatas.' }, { step: 10, description: 'Elas irão dourar junto com a carne.' }],
aditionalInformation: '',
preparationTime: [{ time: 120, measure: 'min' }],
servingSize: '9 porções'
},
{
id: 2,
title: 'Mousse de maracujá',
author: 'Luciana Camargo',
link: 'https://www.tudogostoso.com.br/receita/1599-mousse-de-maracuja.html',
category: 'Doce',
ingredients: [{ name: 'leite condensado', quantity: 1, measure: 'lata', observation: '' }, { name: 'maracujá', quantity: 1, measure: 'lata', observation: '(medida pela lata de leite condensado)' }, { name: 'creme de leite', quantity: 1, measure: 'lata', observation: '' }],
preparationMode: [{ step: 1, description: 'Em um liquidificador, bata o creme de leite, o leite condensado e o suco concentrado de maracujá.' }, { step: 2, description: 'Em uma tigela, despeje a mistura e leve à geladeira por, no mínimo, 4 horas.' }],
aditionalInformation: 'Para fazer a calda, você só precisa misturar 1 xícara de polpa de maracujá com 1/2 xícara de açúcar. Leve à uma panela, em fogo baixo, mexa bem e deixe ferver. Mexa mais um pouco até ficar em ponto de calda. Depois é só levar à geladeira junto com a mousse.',
preparationTime: [{ time: 5, measure: 'min' }],
servingSize: '6 porções'
}
]
}
*/