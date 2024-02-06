export const typeDefs = `#graphql

type threads{
    id:ID!,
    title:String!
    image:Media
    user:user
}
type Media{
    id:ID!
    objectId:String!
}
`
