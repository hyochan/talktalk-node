import { resolve } from 'path';
import { Prisma } from 'prisma-binding';
import { GraphQLServer } from 'graphql-yoga';

import authMiddleware from './middlewares/authMiddleware';

import * as resolvers from './resolvers';

require('dotenv').config();

const {
  PORT = 4000,
  DEBUG = 'false',
  JWT_SECRET,
  PRISMA_ENDPOINT,
} = process.env;

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'schemas', 'schema.graphql'),
  middlewares: [authMiddleware(JWT_SECRET)],
  context: (req) => ({
    ...req,
    prisma: new Prisma({
      typeDefs: resolve(__dirname, 'schemas', 'prisma.graphql'),
      endpoint: PRISMA_ENDPOINT,
      debug: DEBUG === 'true',
    }),
  }),
  resolvers,
});

server
  .start({ port: PORT })
  .then(() => console.log(`Server running on port ${PORT}`))
  .catch((e) => console.error(e));
