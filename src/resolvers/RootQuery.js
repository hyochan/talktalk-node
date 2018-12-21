import { getUserId } from '../utils';

const RootQuery = {
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

export default RootQuery;
