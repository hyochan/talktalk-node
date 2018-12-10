// src/index.js
import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';

import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Node from './resolvers/Node';

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
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
  context: req => ({
    ...req,
    prisma: db,
  }),
});

server.start(() => console.log(`GraphQL server is running on http://localhost:4000`));
