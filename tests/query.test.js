import Query from 'resolvers/Query';

describe('Query', () => {
  it('should resolves users correctly', () => {
    const usersResolver = Query.users;
    const context = {
      prisma: {
        query: {
          users: jest.fn(),
        },
      },
      currentUser: {
        id: 'current_user_id',
      },
    };
    const info = null;

    usersResolver(null, null, context, info);

    expect(context.prisma.query.users).toHaveBeenCalledWith({
      where: {
        NOT: {
          id: context.currentUser.id,
        },
      },
    }, info);
  });

  it('should resolves user correctly', () => {
    const userResolver = Query.user;
    const args = {
      id: 'user_id',
    };
    const context = {
      prisma: {
        query: {
          user: jest.fn(),
        },
      },
    };
    const info = null;

    userResolver(null, args, context, info);

    expect(context.prisma.query.user).toHaveBeenCalledWith({
      where: {
        id: args.id,
      },
    }, info);
  });
});
