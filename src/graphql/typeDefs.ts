import { User } from './user'
import { thread } from './thread'

const typeDefs = `#graphql

${User.typeDefs}
${thread.typeDefs}

type Query {
  ${User.queries}
  ${thread.queries}
}

type Mutation {
  ${User.mutations}
  ${thread.mutations}
}

`

export default typeDefs
