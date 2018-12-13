import jwt from 'jsonwebtoken';
import { getUserId, APP_SECRET } from '../utils';

const Mutation = {
  signup: async(_, args, context, info) => {
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
