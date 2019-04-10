// @flow

import { Message_defaultResolvers } from 'generated/graphqlgen';
import type { Message_Resolvers } from 'generated/graphqlgen';

export const Message: Message_Resolvers = {
  ...Message_defaultResolvers,

  file: (parent, args, ctx, info) => {
    throw new Error('Resolver not implemented');
  },
};
