/* @flow */
import type { Query_Resolvers } from 'generated/graphqlgen';

export const Query: Query_Resolvers = {
  me: (parent, args, ctx, info) => {
    throw new Error('Resolver not implemented');
  },
  user: (parent, args, ctx, info) => {
    throw new Error('Resolver not implemented');
  },
  chat: (parent, args, ctx, info) => {
    throw new Error('Resolver not implemented');
  },
};
