import prismaClient from '../lib/db'

export interface createThreadPayload {
  title: string
  image: string
  userId: string
}

class threadService {
  public static async createThread({
    image,
    title,
    userId,
  }: createThreadPayload) {
    try {
      const thread = await prismaClient.media.create({
        data: {
          objectId: image,
          Thread: { create: { title, userId } },
        },
      })
      return thread ? true : false
    } catch (e) {
      throw new Error((e as Error).message)
    }
  }
  public static async getThread(userId: string) {
    try {
      const thread = await prismaClient.thread.findMany({
        where: { userId },
        include: { image: true, user: true },
      })
      return thread
    } catch (e) {
      throw new Error((e as Error).message)
    }
  }
}

export default threadService
