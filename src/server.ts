import ejs from 'ejs';
import path from 'path';
import { GraphQLServer } from 'graphql-yoga';

import { prisma } from 'generated/prisma-client';
import { resolvers } from 'resolvers';
import { createAuthMiddleware } from 'middlewares';
import { emailRouter } from 'routers';

require('dotenv').config();

const {
  SERVER_PORT,
  JWT_SECRET,
} = process.env;

const server = new GraphQLServer({
  typeDefs: path.join(__dirname, 'schema.graphql'),
  resolvers,
  middlewares: [
    createAuthMiddleware(JWT_SECRET),
  ],
  context: (ctx) => ({
    ...ctx,
    prisma,
  }),
});

server.express.set('views', path.join(process.cwd(), 'views'));
server.express.set('view engine', 'html');
server.express.engine('html', ejs.renderFile);

server.express.use('/email', emailRouter)

server
  .start({ port: SERVER_PORT })
  .then(() => console.log(`Server running on port ${SERVER_PORT}`))
  .catch((e) => console.error(e));
