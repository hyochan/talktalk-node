// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { UserResolvers } from 'generated/graphqlgen';

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  friends: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  blocks: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  joinedChats: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  photo: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  }
};
