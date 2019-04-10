// @flow

import { Chat_defaultResolvers } from 'generated/graphqlgen';
import type { Chat_Resolvers } from 'generated/graphqlgen';

export const Chat: Chat_Resolvers = {
  ...Chat_defaultResolvers,

  lastActiveAt: (parent, args, ctx, info) => {
    throw new Error('Resolver not implemented');
  },
  unreadCount: (parent, args, ctx, info) => {
    throw new Error('Resolver not implemented');
  },
  messages: (parent, args, ctx, info) => {
    throw new Error('Resolver not implemented');
  },
};
