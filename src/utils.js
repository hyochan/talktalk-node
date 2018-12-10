import jwt, { verify } from 'jsonwebtoken';

const APP_SECRET = 'REACT NATIVE SEOUL - DOOBOOLAB';

class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}

const getUserId = (context) => {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, APP_SECRET);
    return userId;
  }
  throw new AuthError();
};

export {
  getUserId,
  APP_SECRET,
};
