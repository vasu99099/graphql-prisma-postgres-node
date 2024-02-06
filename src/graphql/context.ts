import userService from '../services/user.services'
import helper from '../utils/helper'

const context = async ({ req }: { req: any }) => {
  const token = req.headers.authorization || ''
  try {
    if (token) {
      const tokenData = helper.decodeJWT(token) as any
      if (tokenData) {
        const id = tokenData?.id || ''
        const user = await userService.getUserById(id)
        if (user) {
          return { user }
        }
      }
    }
  } catch (e) {
    return {}
  }
  return {}
}

export default context
