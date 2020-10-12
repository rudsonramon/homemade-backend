const { join } = require('path')
const { mergeTypeDefs, loadFilesSync, mergeResolvers } = require('graphql-tools');

const allTypes = loadFilesSync(join(__dirname, 'models', '**', '*.gql'))
const allResolvers = loadFilesSync(join(__dirname, 'models', '**', '*resolvers.js'))

const typeDefs = mergeTypeDefs(allTypes)
const resolvers = mergeResolvers(allResolvers)

module.exports = { typeDefs, resolvers }