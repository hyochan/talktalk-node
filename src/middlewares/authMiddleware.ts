import { IMiddleware } from 'graphql-middleware';
import jwt from 'jsonwebtoken';

import { ServerContext, ServerJWT } from 'types';

export function createAuthMiddleware (appSecret?: string): IMiddleware<any, ServerContext> {
  if (!appSecret) {
    throw new Error('The secret to encrypt JWT is must be provided');
  }

  return async (resolve, parent, args, context, info) => {
    const authHeader = context.request.get('Authorization');
    const newContext = { ...context };

    if (authHeader) {
      const [, token] = authHeader.split(' ');
      const { userId } = jwt.verify(token, appSecret) as ServerJWT;

      newContext.userId = userId;
      newContext.getCurrentUser = () => context.prisma.user({ id: userId });
    } else {
      newContext.getCurrentUser = () => { throw new Error('Not authorized'); };
    }

    const result = await resolve(parent, args, newContext, info);
    return result;
  };
}
