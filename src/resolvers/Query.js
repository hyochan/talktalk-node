const Query = {
  users: (parent, args, context, info) => (
    context.prisma.query.users({
      where: {
        NOT: {
          id: context.currentUser.id,
        },
      },
    }, info)
  ),
  user: (parent, args, context, info) => (
    context.prisma.query.user({
      where: {
        id: args.id,
      },
    }, info)
  ),
};

export default Query;
