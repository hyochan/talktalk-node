import jwt from 'jsonwebtoken';

export default function authMiddleware(appSecret) {
  if (!appSecret) {
    throw new Error('The secret to encrypt JWT is must be provided');
  }

  return async(resolve, parent, args, context, info) => {
    let currentUser = null;

    const authHeader = context.request.get('Authorization');
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);
      currentUser = await context.prisma.query.user({
        where: {
          id: userId,
        },
      }, info);
    }

    const contextWithCurrentUser = {
      ...context,
      appSecret,
      currentUser,
    };

    try {
      const result = await resolve(parent, args, contextWithCurrentUser, info);
      return result;
    } catch (err) {
      // Catch NPE on context.currentUser
      throw new Error(err);
    }
  };
}
