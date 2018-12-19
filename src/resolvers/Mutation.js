import jwt from 'jsonwebtoken';
import sha256 from 'sha256';
import { getUserId, APP_SECRET } from '../utils';

const Mutation = {
  signup: async(_, args, context, info) => {
    if (args.password) {
      args.password = sha256(args.password);
    }

    const user = await context.prisma.mutation.createUser(
      {
        data: args,
      },
      // info
    );
    console.log('user', user);
    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    return {
      token,
      user,
    };
  },
  signout: async(_, { id }, context, info) => {
    const userId = getUserId(context);
    const user = await context.prisma.mutation.deleteUser(
      {
        where: { id },
      },
      // info
    );
    return user;
  },
  addFriend: (_, { friendId }, context, info) => {
    const userId = getUserId(context);
    return context.prisma.mutation.updateUser(
      {
        where: { id: userId },
        data: { friends: { connect: { email: friendId } } },
      },
    );
  },
  removeFriend: (_, { friendId }, context, info) => {
    const userId = getUserId(context);
    return context.prisma.mutation.updateUser(
      {
        where: { id: userId },
        data: { friends: { disconnect: { email: friendId } } },
      },
    );
  },
};

export default Mutation;
