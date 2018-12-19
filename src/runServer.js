// src/index.js
import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';

import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Node from './resolvers/Node';

export const runServer = async() => {
  const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://prisma:4466',
    debug: true,
  });

  const resolvers = {
    Query,
    Mutation,
    Node,
  };

  const server = new GraphQLServer({
    typeDefs: `src/schema.graphql`,
    resolvers,
    context: (req) => ({
      ...req,
      prisma: db,
    }),
  });

  const app = await server.start({
    port: process.env.NODE_ENV === 'test' ? 0 : 4000,
  });

  return app;
};
