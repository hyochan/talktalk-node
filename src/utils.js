import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}

export const getUserId = (context) => {
  const authHeader = context.request.get('Authorization');
  if (authHeader) {
    const token = authHeader.replace('Bearer ', '');
    const { userId } = jwt.verify(token, JWT_SECRET);
    return userId;
  }
  throw new AuthError();
};
