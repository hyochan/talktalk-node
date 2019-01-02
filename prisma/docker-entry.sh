#!/bin/sh

until nc -z $PRISMA_DB_HOST $PRISMA_DB_PORT; do
    echo "Wating connection established for $PRISMA_DB_HOST $PRISMA_DB_PORT ..."
    sleep 5
done

exec /app/start.sh "$@"
