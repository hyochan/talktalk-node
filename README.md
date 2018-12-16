Welcome to the talktalk-node wiki!
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
    - when you execute *local test* via `prisma deploy` command with `prisma generate` at **post-deploy hook setting** in `prisma.yml`, this error occured in prisma *Homebrew installation*.
    - that error not fixed in *Homebrew installation* yet.
    - **so install via npm**
    - [GitHub issues: Error: Cannot find module 'generate'](https://github.com/prisma/Mongo-Connector-Preview/issues/1#issuecomment-441361867)
   
### Running server
1. `$ docker-compose up -d`
    - Run docker in background.
2. `$ npm run prisma:deploy`
    - Run prisma container
3. `$ npm start`

### Running server with local configuration
1. `$ npm install`
2. start `Docker`
3. `$ docker-compose up -d`
    - Create and start Docker container in background.
4. `$ prisma deploy`
    - Run prisma container
    - You can check on http://localhost:4466/
5. `$ npm start`
    - you can run `$ npm run prisma:local` which can do *step 3~5* at once.
    - `Caveat`: *$ prisma deploy* may be failed first execution. It would be working well when you try this again.
  
    #### Cleaning up docker container & prisma server
    - `$ docker-compose stop prisma mysql`
      > `prisma` and `mysql` is service name at `docker-compose.yml`
        ```
        Stopping talktalk-node_prisma_1 ... done
        ```
    - `$ docker-compose rm prisma mysql`
        ```
        Going to remove talktalk-node_prisma_1
        Are you sure? [yN] y
        Removing talktalk-node_prisma_1 ... done
        Removing talktalk-node_mysql_1  ... done
        ```

    #### Debug: Check docker container's inspect
    - `$ docker inspect [Mysql Docker Container's Name]`
    - You can check container's name on `$ docker ps`

    #### Debug: Check docker container log
    - `$ docker-compose logs prisma`

    #### Setting for connecting to Mysql Workbench
    - append or change `ports` option in mysql service at `docker-compose.yml`
      ```
      services:
        prisma:
          environment:
            PRISMA_CONFIG: |
              databases:
                default:
                  connector: mysql
                  host: mysql
                  user: root
                  password: prisma
                  rawAccess: true
                  port: 3306
                  migrations: true
        mysql:
          image: mysql:5.7
          restart: always
          environment:
            MYSQL_ROOT_PASSWORD: prisma
          volumes:
            - mysql:/var/lib/mysql
          ports:            <- add this
            - "33061:3306"  <- add this
      volumes:
        mysql:
      ```
    - kill and restart docker container
    - Go to Workbench and Add MySQL Connections with this info
      - Hostname: **0.0.0.0**
      - Port: **33601**
      - Username: **root**
      - Password: **prisma**

## More details
- [LICENSE](https://github.com/dooboolab/talktalk-node/blob/master/LICENSE)
- [CONTRIBUTION](https://github.com/dooboolab/talktalk-node/blob/master/CONTRIBUTING.md)
