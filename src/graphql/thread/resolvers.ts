import { createThread, getThreads } from '../../controller/thread.controller'

const queries = {
  getThreads: getThreads,
}

const mutations = {
  createThread: createThread,
}

export const resolvers = { mutations, queries }
