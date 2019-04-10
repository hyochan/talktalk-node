// @flow

import { User_defaultResolvers } from 'generated/graphqlgen';
import type { User_Resolvers } from 'generated/graphqlgen';

export const User: User_Resolvers = {
  ...User_defaultResolvers,

  friends: (parent, args, ctx, info) => {
    throw new Error('Resolver not implemented');
  },
  blocks: (parent, args, ctx, info) => {
    throw new Error('Resolver not implemented');
  },
  joinedChats: (parent, args, ctx, info) => {
    throw new Error('Resolver not implemented');
  },
  photo: (parent, args, ctx, info) => {
    throw new Error('Resolver not implemented');
  },
};
