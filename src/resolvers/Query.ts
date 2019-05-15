// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { QueryResolvers } from 'generated/graphqlgen';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  me: (parent, args, ctx) => ctx.getCurrentUser(),
  user: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  chat: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  }
};
