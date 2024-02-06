import prismaClient from '../lib/db'
import helper from '../utils/helper'

export interface CreateUserPayload {
  firstName: string
  lastName: string
  email: string
  password: string
}

class userService {
  public static getUserByEmail(email: string) {
    return prismaClient.user.findUnique({ where: { email } })
  }

  public static async createUser({
    firstName,
    lastName,
    email,
    password,
  }: CreateUserPayload) {
    const salt = helper.getRandomSlat()

    try {
      const user = await prismaClient.user.create({
        data: {
          email,
          firstName,
          lastName,
          password: helper.generateHash(salt, password),
          salt,
        },
      })
      return user ? true : false
    } catch (e) {
      throw new Error((e as Error).message)
    }
  }

  public static async getAllUsers() {
    try {
      const users = await prismaClient.user.findMany()
      return users
    } catch (e) {
      throw new Error((e as Error).message)
    }
  }
  public static async getUserById(id: string) {
    try {
      const user = await prismaClient.user.findUnique({
        where: { id },
      })
      return user
    } catch (e) {
      throw new Error((e as Error).message)
    }
  }
}

export default userService
