import { ApolloServer } from '@apollo/server'
import { Express } from 'express'
import { expressMiddleware } from '@apollo/server/express4'
import { resolvers } from '../graphql/resolvers'
import typeDefs from '../graphql/typeDefs'
import { errorFormater } from '../utils/error/errorFormater'
import context from '../graphql/context'

const graphqlInit = async (server: Express) => {
  const gqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: errorFormater,
  })

  await gqlServer.start()
  server.use(
    '/graphql',
    expressMiddleware(gqlServer, {
      context: context,
    }),
  )
}

export default graphqlInit
