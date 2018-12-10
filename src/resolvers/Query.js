import { getUserId } from '../utils';
const Query = {
  user: (_, args, context, info) => {
    const userId = getUserId(context);
    return context.prisma.query.user(
      {
        where: {
          id: args.id,
        },
      },
      info
    )
  }
};

export default Query;
