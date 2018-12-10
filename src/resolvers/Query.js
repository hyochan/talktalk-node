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
    );
  },
  friends: (_, args, context, info) =-> {
    /// TODO: 
  }
};

export default Query;
