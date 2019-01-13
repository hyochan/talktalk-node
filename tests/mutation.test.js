import jwt from 'jsonwebtoken';
import sha256 from 'sha256';

import Mutation from 'resolvers/Mutation';

describe('Mutation', () => {
  describe('signup', () => {
    const signup = Mutation.signup;
    it('should creates user and returns it with token', async() => {
      const userId = 'user_id';

      const args = {
        password: 'TEST_PASSWORD',
      };
      const context = {
        prisma: {
          mutation: {
            createUser: jest.fn()
              .mockReturnValueOnce(Promise.resolve({ id: userId })),
          },
        },
        appSecret: 'secret',
      };

      const { token, user } = await signup(null, args, context);
      expect(context.prisma.mutation.createUser).toHaveBeenCalledWith({
        data: {
          password: sha256(args.password),
        },
      });
      expect(user.id).toEqual(userId);
      expect(jwt.verify(token, context.appSecret).userId).toEqual(userId);
    });
  });

  describe('signout', () => {
    const signout = Mutation.signout;
    it('should deletes user correctly', () => {
      const context = {
        prisma: {
          mutation: {
            deleteUser: jest.fn(),
          },
        },
        currentUser: {
          id: 'current_user_id',
        },
      };

      signout(null, null, context);
      expect(context.prisma.mutation.deleteUser).toHaveBeenCalledWith({
        where: {
          id: context.currentUser.id,
        },
      });
    });
  });

  describe('addFriend', () => {
    const addFriend = Mutation.addFriend;
    it('should connects user correctly', () => {
      const args = {
        friendId: 'friend_id',
      };
      const context = {
        prisma: {
          mutation: {
            updateUser: jest.fn(),
          },
        },
        currentUser: {
          id: 'current_user_id',
        },
      };
      const info = null;

      addFriend(null, args, context, info);
      expect(context.prisma.mutation.updateUser).toHaveBeenCalledWith({
        where: { id: context.currentUser.id },
        data: { friends: { connect: { email: args.friendId } } },
      }, info);
    });
  });

  describe('removeFriend', () => {
    const removeFriend = Mutation.removeFriend;
    it('should disconnects user correctly', () => {
      const args = {
        friendId: 'friend_id',
      };
      const context = {
        prisma: {
          mutation: {
            updateUser: jest.fn(),
          },
        },
        currentUser: {
          id: 'current_user_id',
        },
      };
      const info = null;

      removeFriend(null, args, context, info);
      expect(context.prisma.mutation.updateUser).toHaveBeenCalledWith({
        where: { id: context.currentUser.id },
        data: { friends: { disconnect: { email: args.friendId } } },
      }, info);
    });
  });
});
