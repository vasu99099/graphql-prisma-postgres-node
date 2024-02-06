import { User } from './user'
import { thread } from './thread'

export const resolvers = {
  Query: {
    ...User.resolvers.queries,
    ...thread.resolvers.queries,
  },
  Mutation: {
    ...User.resolvers.mutations,
    ...thread.resolvers.mutations,
  },
}
