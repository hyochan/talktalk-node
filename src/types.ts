import { Prisma, User } from 'generated/prisma-client'
import { ContextParameters } from 'graphql-yoga/dist/types'

export interface ServerContext extends ContextParameters {
  prisma: Prisma

  // Injected by authMiddleware
  userId?: string
  getCurrentUser: () => Promise<User>
}

export interface ServerJWT {
  userId: string
}
