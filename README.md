# talktalk-node
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

## Applying schema to database
* If you've edited `prisma/prisma.yml` or `src/schema.graphql`, you must `npm run prisma:deploy` in order to apply changes to database.


## Setting up talktalk-node
We will provide you how to set this up locally when it is ready.

## More details
- [LICENSE](https://github.com/dooboolab/talktalk-node/blob/master/LICENSE)
- [CONTRIBUTION](https://github.com/dooboolab/talktalk-node/blob/master/CONTRIBUTING.md)
