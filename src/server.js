const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('../src/graphql')
const express = require('express')
const routes = require('./routes')
const recipes = require('./database')
//const recipes = require('./controlers/RecipeController')

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
