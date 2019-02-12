import sha256 from 'sha256';
import aes256 from 'aes256';
import randomString from 'randomstring';
import nodemailer from 'nodemailer';

import ejs from 'ejs';
import path, { resolve } from 'path';

import { Prisma } from 'prisma-binding';
import { GraphQLServer } from 'graphql-yoga';

import authMiddleware from './middlewares/authMiddleware';
import * as resolvers from './resolvers';
import { schemaPath } from './utils';

require('dotenv').config();

const {
  PORT = 4000,
  DEBUG = 'false',
  JWT_SECRET,
  PW_RESET_KEY,
  CS_EMAIL_ADDRESS,
  CS_EMAIL_PASSWORD,
  PRODUCTION_END_POINT,
  PRISMA_ENDPOINT,
} = process.env;

const URL = DEBUG !== 'false' ? PRODUCTION_END_POINT : 'http://localhost:4000';

const prisma = new Prisma({
  typeDefs: resolve(__dirname, 'schemas', 'prisma.graphql'),
  endpoint: PRISMA_ENDPOINT,
  debug: DEBUG === 'true',
});

const server = new GraphQLServer({
  typeDefs: schemaPath('root.graphql'),
  middlewares: [authMiddleware(JWT_SECRET)],
  context: (req) => ({
    ...req,
    prisma,
  }),
  resolvers,
});

/**
 * Set express view engine to html and join path.
 */
server.express.set('views', path.join(__dirname, '../html'));
server.express.engine('html', ejs.renderFile);
server.express.set('view engine', 'html');

/**
 * Send reset password link to user's email address.
 */
server.express.get('/reset_email/:email', async(req, res) => {
  if (!req.params.email) {
    res.status(404).end();
  }

  const result = await prisma.query.user({
    where: {
      email: req.params.email,
    },
  }, `{
    email,
  }`);

  if (!result) {
    res.status(400);
    res.json({
      status: res.statusCode,
      message: 'no user found',
    });
    return;
  }

  const encrypted = Buffer.from(aes256.encrypt(process.env.PW_RESET_KEY, req.params.email)).toString('base64');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: CS_EMAIL_ADDRESS,
      pass: CS_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: CS_EMAIL_ADDRESS,
    to: req.params.email,
    subject: 'TalkTalk - Reset Password', // Subject line
    html: `Reset your [TalkTalk] password by clicking → <a href="${URL}/reset_password/${encrypted}">RESET PASSWORD</a>`,
  };

  transporter.sendMail(mailOptions, (err, transportRes) => {
    console.log('sendMail');
    if (err) {
      res.status(500);
      res.json({
        status: res.statusCode,
        message: err,
      });
    } else {
      console.log('err', res);
      res.json({
        status: res.statusCode,
        message: JSON.stringify(transportRes),
      });
    }
    transporter.close();
  });
});

/**
 * Reset password when user clicks on sent `${reset password link}`.
 */
server.express.get('/reset_password/:encrypted', async(req, res) => {
  if (!req.params.encrypted) {
    res.status(404).end();
  }
  const decrypted = aes256.decrypt(process.env.PW_RESET_KEY, Buffer.from(req.params.encrypted, 'base64').toString());
  const newPassword = randomString.generate(8);
  try {
    const result = await prisma.mutation.updateUser({
      where: {
        email: decrypted,
      },
      data: { password: sha256(newPassword) },
    });

    res.render('reset_pw', { password: newPassword });
  } catch (err) {
    res.status(500);
    res.json({
      status: res.statusCode,
      message: err,
    });
  }
});

server
  .start({ port: PORT })
  .then(() => console.log(`Server running on port ${PORT}`))
  .catch((e) => console.error(e));
