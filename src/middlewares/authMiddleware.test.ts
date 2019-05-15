import jwt from 'jsonwebtoken';
import { GraphQLFieldResolver } from 'graphql';

import { ServerContext } from 'types';

import { createAuthMiddleware } from './authMiddleware';

describe('Authorization middleware', () => {
  const SECRET = 'TEST';
  const token = jwt.sign({ userId: 'MY_USER_ID' }, SECRET);
  const middleware = createAuthMiddleware(SECRET);

  it('should build context with userId', async () => {
    const mockRequest = {
      get: jest.fn().mockReturnValue(`Bearer ${token}`),
    };

    const mockContext = {
      request: mockRequest,
    };

    const testResolver: GraphQLFieldResolver<any, ServerContext> =
            (parent, args, ctx) => {
              expect(ctx.userId).toEqual('MY_USER_ID');
            }
        ;

    // @ts-ignore
    await middleware(testResolver, null, null, mockContext);
  });

  describe('getCurrentUser()', () => {
    it('throws error if the token is invalid', async () => {
      const mockRequest = {
        get: jest.fn().mockReturnValue('Bearer INVALID_TOKEN'),
      };

      const mockPrisma = {
        user: jest.fn(),
      };

      const mockContext = {
        request: mockRequest,
        prisma: mockPrisma,
      };

      const testResolver: GraphQLFieldResolver<any, ServerContext> =
                (parent, args, ctx) => {
                  expect(ctx.getCurrentUser).toThrow();
                }
            ;

      // @ts-ignore
      await middleware(testResolver, null, null, mockContext);
    });

    it('throws error if the Authorization header does not exist', async () => {
      const mockRequest = {
        get: jest.fn(),
      };

      const mockPrisma = {
        user: jest.fn(),
      };

      const mockContext = {
        request: mockRequest,
        prisma: mockPrisma,
      };

      const testResolver: GraphQLFieldResolver<any, ServerContext> =
                (parent, args, ctx) => {
                  expect(ctx.getCurrentUser).toThrow();
                }
            ;

      // @ts-ignore
      await middleware(testResolver, null, null, mockContext);
    });
  });
});
