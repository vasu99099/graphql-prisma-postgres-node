import { Express, json } from 'express'
import dotenv from 'dotenv'
import graphqlInit from './graphqlInit'

dotenv.config()
const expressInit = async (server: Express) => {
  try {
    server.use(json())
    await graphqlInit(server)

    const PORT = process.env.PORT || 5000

    server.listen(PORT, () => console.log('server is running on Port: ' + PORT))
  } catch (e) {
    const error = e as Error
    console.log('(error)=>' + error.message)
  }
}

export default expressInit
