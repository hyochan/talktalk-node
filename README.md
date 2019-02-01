Welcome to the talktalk-node wiki!
# talktalk-node
[![codecov](https://codecov.io/gh/dooboolab/talktalk-node/branch/master/graph/badge.svg)](https://codecov.io/gh/dooboolab/talktalk-node)
[![CircleCI](https://circleci.com/gh/dooboolab/talktalk-node.svg?style=svg)](https://circleci.com/gh/dooboolab/talktalk-node)

This is backend application for talktalk built in [react-native](https://github.com/facebook/react-native).
TalkTalk is an opensource chat app under construction.

## Specification
You need to know about below techniques in able to understand the server specifications comfortably.
* [Prisma](https://www.prisma.io/)
* [Graphql](https://graphql.org/)
* [babeljs](https://babeljs.io/)
* [nodejs](https://nodejs.org/)
* [docker](https://www.docker.com/)
* [docker-compose](https://docs.docker.com/compose/)
* [mysql](https://www.mysql.com/)
* [azure-storage](https://azure.microsoft.com/en-us/services/storage/)

## Version
The version listed is used in current environment. This must not be identical to your environment.

| Tool                  | Version      |
| --------------------- | ------------ |
| babeljs               | 7+           |
| nodejs                | 10+          |
| npm                   | 6.4+         |
| prisma                | 1.2+         |
| mysql                 | 5.7+         |
| docker                | 18.09+       |
| docker-compose        | 1.23+        |

## Setting up talktalk-node

### Install Docker Desktop
##### Download Links : *This step requires Sign in (or Sign Up) to DockerHub*
- [Docker Desktop(Mac)](https://store.docker.com/editions/community/docker-ce-desktop-mac)
- [Docker Desktop(Windows)](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
  
### Install the Prisma CLI
- [Document: Set up Prisma](https://www.prisma.io/docs/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/)

    ```
    npm install -g prisma
    
    or
    
    brew tap prisma/prisma
    brew install prisma
    ```

    **`Caution`: prisma installation via npm recommended.**  
    
    ```
    Error: Cannot find module 'generate'
    ```
    - when you execute *local test* via `prisma deploy` command at **post-deploy hook setting** in `prisma.yml`, this error occured in prisma *Homebrew installation*.
    - that error not fixed in *Homebrew installation* yet.
    - **so install via npm**
    - [GitHub issues: Error: Cannot find module 'generate'](https://github.com/prisma/Mongo-Connector-Preview/issues/1#issuecomment-441361867)
   
### Running server

First of all, run `cp .env.sample .env` to generate environment file.

Basically you need to change nothing but only `JWT_SECRET` with any value for local dev environment.

| Name                         | Description               | required? | default               |
|:-----------------------------|:------------------------- | --------- | --------------------- |
| JWT_SECRET                   | Secret key to enc/dec JWT | true      |                       |
| PW_RESET_KEY                 | Encrypting key for resetting password  | true      |  |
| CS_EMAIL_ADDRESS             | Bot email address         | true      |                       |
| CS_EMAIL_PASSWORD            | Bot email password        | true      |                       |
| PRODUCTION_END_POINT         | Production server url     | false     |                       |
| DEBUG                        | Flag to enable debug mode |           | false                 |
| PRISMA_ENDPOINT              | Prisma endpoint URL       | true      | http://localhost:4466 |
| PRISMA_MANAGEMENT_API_SECRET | Prisma service secret, required for production | false |  |
| PRISMA_DB_CONNECTOR          | Database connector        | true      | mysql                 |
| PRISMA_DB_DATABASE           | Database name             | false     | prisma                |
| MY_SQL_ROOT_PASSWORD         | Database root password    | false     | prisma                |
| * note thate if you do not want to go throught all these at first time, just cp `.env.sample` directly to `.env` and go to next step.

Then,

1. `docker-compose up -d`  
   Run all prisma services in background.

2. `prisma deploy`  
   Initialize or apply changes of prisma data model to database.

3. `npm start`  
   Start Express.js server to provide GraphQL API

## Applying schema to database
* If you've edited `prisma/datamodel.prisma`, you must `prisma deploy` in order to apply changes to database.

## More details
- [LICENSE](https://github.com/dooboolab/talktalk-node/blob/master/LICENSE)
- [CONTRIBUTION](https://github.com/dooboolab/talktalk-node/blob/master/CONTRIBUTING.md)
