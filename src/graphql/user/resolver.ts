import {
  getAllUsers,
  loginUser,
  signUpUser,
} from '../../controller/user.controller'
import { isAuthenticated } from '../../middleware/authentication'
import { Context } from '../../types/context.Types'

const queries = {
  userLogin: async (_: any, payload: { email: string; password: string }) => {
    const res = await loginUser(payload)
    return res
  },
  getUsers: async (_: any, __: any, context: Context) => {
    isAuthenticated(context)
    const res = await getAllUsers()
    return res
  },
}

const mutations = {
  createUser: signUpUser,
}

export const resolvers = { mutations, queries }
