// const jwt = require('express-jwt');
import jwt from 'jsonwebtoken';

// src/index.js
import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';

const SECRET = 'REACT NATIVE SEOUL - DOOBOOLAB';

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
  debug: true,
});

const getUserId = (context) => {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, SECRET);
    return userId;
  }
  throw new Error('no valid user');
};

const resolvers = {
  Query: {
    user: async (_, args, context, info) => {
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
  },
  Mutation: {
    signup: async (_, args, context, info) => {
      const user = await context.prisma.mutation.createUser(
        {
          data: args,
        },
        // info
      );
      console.log('user', user);
      const token  = jwt.sign({ userId: user.id }, SECRET);
      return {
        token,
        user,
      };
    }
  },
  Node: {
    __resolveType() {
      return null;
    }
  },
};

const server = new GraphQLServer({
  typeDefs: `src/schema.graphql`,
  resolvers,
  context: req => ({
    ...req,
    prisma: db,
  }),
});

server.start(() => console.log(`GraphQL server is running on http://localhost:4000`));
