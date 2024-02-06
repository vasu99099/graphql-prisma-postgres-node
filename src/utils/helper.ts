import { createHmac, randomBytes } from 'crypto'
import jwt from 'jsonwebtoken'

export interface CreateUserPayload {
  firstName: string
  lastName: string
  email: string
  password: string
}
class helper {
  public static generateHash(salt: string, payload: string) {
    return createHmac('sha256', salt).update(payload).digest('hex')
  }
  public static generateJWT(
    payload: { [key: string]: string },
    expiresIn = '2d',
  ) {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'graphql'
    return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn })
  }
  public static decodeJWT(token: string) {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'graphql'
    return jwt.verify(token, JWT_SECRET_KEY)
  }

  public static getRandomSlat() {
    return randomBytes(20).toString('hex')
  }
}

export default helper
