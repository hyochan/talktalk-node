import { getUserId } from '../utils';
const Query = {
  users: (_, args, context, info) => {
    const { userId } = getUserId(context);
    return context.prisma.query.users(
      // {
      //   where: {
      //     NOT: {
      //       id: userId,
      //     },
      //   },
      // },
    );
  },
  user: (_, args, context, info) => {
    const userId = getUserId(context);
    return context.prisma.query.user(
      {
        where: {
          id: args.id,
        },
      },
      info
    );
  },
};

export default Query;
