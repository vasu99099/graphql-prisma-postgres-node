# graphql-prisma-postgres-node

This repository contains a Node.js application that utilizes GraphQL for API queries and mutations, PostgreSQL as its database management system, and Docker for containerization.

## Prerequisites

Before running this application, ensure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/)


## Project Structure

```plaintext
    env_files
    |   |-- .env.local
    |   |-- .env.test
    |   |-- .env.stage
    |   |-- .env.prod
    |   |-- .sample.env
    src
    |-- controller
    |   |-- thread.controller.ts
    |   |-- user.controller.ts
    |
    |-- graphql
    |   |
    |   |-- thread
    |   |       |--index.ts
    |   |       |--mutations.ts
    |   |       |--queries.ts
    |   |       |--resolvers.ts
    |   |       |--typeDefs.ts
    |   |-- user
    |   |       |--index.ts
    |   |       |--mutations.ts
    |   |       |--queries.ts
    |   |       |--resolvers.ts
    |   |       |--typeDefs.ts
    |   |       
    |   |--context.ts
    |   |--reslovers.ts
    |   |--typeDefs.ts
    |   
    |-- lib
    |   |-- db.ts
    |   |-- expressInit.ts
    |   |-- graphqlInit.ts
    |   
    |-- middleware
    |   |-- authentication.ts
    |   
    |-- services
    |   |-- user.service.ts
    |   |-- thread.service.ts
    |   
    |-- utils
    |   |-- error
    |   |   |--errorFormater.ts
    |   |   |--errorMSG_Code.ts
    |   |   |--statusCode.ts
    |   | 
    |   |-- helper.ts
    |   
    |-- validationSchema
    |   |-- user.validation.ts
    |   |-- thread.validation.ts
    |   
    |-- index.ts
    |
    |-- docker-compose.yml
    |-- package.json
    |-- tsconfig.json
```
### Running Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vasu99099/graphql-prisma-postgres-node
   ```

2. **Navigate to the project directory:**

   ```bash
   cd graphql-prisma-postgres-node
   ```

3. **Intsall dependencies:**

   ```bash
   npm install
   ```

## Environment Variables

Before running the application, ensure you have set the following environment variables:

- `PORT`: Your server running port
- `JWT_SECRET_KEY`: Your jwt secret key for token
- `DATABASE_URL`: Your database URL
- `POSTGRES_PORT`: Your database port
- `POSTGRES_USER`: Your database username
- `POSTGRES_PASSWORD`: Your database password
- `POSTGRES_DATABSE`: Your database name

Create a `env-files/.env.local` file in the project root and define these variables accordingly.

4. **Docker Composer up:**

   ```bash
   docker-compose up -d
   ```


5. **Start the application::**

    ```bash
    npm run dev
    ```
## GraphQL Endpoint

The GraphQL endpoint is available at [http://localhost:3000/graphql](http://localhost:3000/graphql). You can use tools like [GraphQL Playground](https://github.com/graphql/graphql-playground) or [GraphiQL](https://github.com/graphql/graphiql) to interact with the API.


