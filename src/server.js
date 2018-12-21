import dotenv from 'dotenv';
import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';

import rootSchema from './schemas/schema.graphql';
import prismaSchema from './schemas/prisma.graphql';

import * as resolvers from './resolvers';

dotenv.config();

const {
  PORT = 4000,
  DEBUG = 'false',
  PRISMA_ENDPOINT,
} = process.env;

const prisma = new Prisma({
  typeDefs: prismaSchema,
  endpoint: PRISMA_ENDPOINT,
  debug: DEBUG === 'true',
});

const server = new GraphQLServer({
  typeDefs: rootSchema,
  resolvers,
  context: (req) => ({
    ...req,
    prisma,
  }),
});

server
  .start({ port: PORT })
  .then(() => console.log(`Server running on port ${PORT}`))
  .catch((e) => console.error(e));
