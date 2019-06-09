import { Prisma, User } from 'generated/prisma-client'
import { ContextParameters } from 'graphql-yoga/dist/types'
import { GraphQLResolveInfo } from 'graphql';

export interface ServerContext extends ContextParameters {
  prisma: Prisma

  // Injected by authMiddleware
  userId?: string
  getCurrentUser: () => Promise<User>
}

export interface ServerJWT {
  userId: string
}


export interface GeneratedResolverFn<TSource, TArgs, TContext = ServerContext, TReturn = any>{
  (parent: TSource, args: TArgs, ctx: TContext, info: GraphQLResolveInfo): TReturn
}
