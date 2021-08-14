> Transferred to [HackaTalk](https://github.com/dooboolab/hackatalk)

# TalkTalk Server (Deprecated!)

[![codecov](https://codecov.io/gh/dooboolab/talktalk-node/branch/master/graph/badge.svg)](https://codecov.io/gh/dooboolab/talktalk-node) [![CircleCI](https://circleci.com/gh/dooboolab/talktalk-node.svg?style=svg)](https://circleci.com/gh/dooboolab/talktalk-node) [![Greenkeeper badge](https://badges.greenkeeper.io/dooboolab/talktalk-node.svg)](https://greenkeeper.io/)

This is server application for TalkTalk, the open source chat app built on top of [React Native](https://github.com/facebook/react-native).

## Specification

You need to know about below techniques in able to understand the server specifications comfortably.

* [Prisma](https://www.prisma.io/)
* [GraphQL](https://graphql.org/)
* [Node.js](https://nodejs.org/)
* [Docker](https://www.docker.com/)
* [docker-compose](https://docs.docker.com/compose/)
* [Azure Storage](https://azure.microsoft.com/en-us/services/storage/)

## Versions

The version listed is used in current environment. This must not be identical to your environment.

| Tool                  | Version      |
| --------------------- | ------------ |
| nodejs                | 10+          |
| npm                   | 6.4+         |
| prisma                | 1.2+         |
| mysql                 | 5.7+         |
| docker                | 18.09+       |
| docker-compose        | 1.23+        |

## Setting up talktalk-node

### Install Docker Desktop

* [Docker Desktop(Mac)](https://store.docker.com/editions/community/docker-ce-desktop-mac)
* [Docker Desktop(Windows)](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
  
### Install the Prisma CLI

* [Document: Set up Prisma](https://www.prisma.io/docs/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/)  

    ```bash
    yarn global add prisma
    ```

### Running server

First of all, run `cp .env.sample .env` to generate environment file.

Basically you need to change nothing but only `JWT_SECRET` with any value for local dev environment.

| Name                         | Description               | required? | default               |
|:-----------------------------|:------------------------- | --------- | --------------------- |
| JWT_SECRET                   | Secret key to enc/dec JWT | true      |                       |
| CS_EMAIL_ADDRESS             | Noreply email address     | false     |                       |
| SMTP_SERVICE                 | SMTP service provider     | false     |                       |
| SMTP_HOST                    | SMTP service host         | false     |                       |
| SMTP_PORT                    | SMTP service port         | false     |                       |
| SMTP_USER                    | User for SMTP authentication       | false |                  |
| SMTP_PASSWORD                | Password for SMTP authentication       | false |              |
| PRISMA_ENDPOINT              | Prisma endpoint port      | true      | 4466 |
| PRISMA_PORT                  | Prisma endpoint URL       | true      | http://localhost:4466 |
| PRISMA_MANAGEMENT_API_SECRET | [Prisma Management API secret](https://www.prisma.io/docs/prisma-server/authentication-and-security-kke4/#prisma-server), required for production | false |  |
| PRISMA_SECRET                | [Prisma service secret](https://www.prisma.io/docs/prisma-server/authentication-and-security-kke4/#prisma-services), required for production | false |  |
| PRISMA_DB_CONNECTOR          | Database connector        | true      | mysql                 |
| PRISMA_DB_DATABASE           | Database name             | false     | prisma                |
| PRISMA_DB_PASSWORD           | Database root password    | false     | prisma                |

Start with below steps,

1. `docker-compose up -d`  
   Run all prisma services in background.

2. `prisma deploy`  
   Initialize or apply changes of prisma data model to database.

3. `yarn start`  
   Start Express.js server to provide GraphQL API

## Applying schema to database

* If you've edited `prisma/datamodel.prisma`, you must `prisma deploy` in order to apply changes to database.

## More details

* [LICENSE](https://github.com/dooboolab/talktalk-node/blob/master/LICENSE)

* [CONTRIBUTION](https://github.com/dooboolab/talktalk-node/blob/master/CONTRIBUTING.md)
