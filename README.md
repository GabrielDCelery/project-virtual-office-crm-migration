# What is this project for?

This is a CRM system for virtual office services.

## Run development environment

The dec environment is accessible via https. First create self signed certificate if you don't have any or if the previous one expired.

```
make self-signed-cert
```

To start a dev environment run

```
make dev
```

The above command will do the followings:

1. Builds the Docker dev image
2. Starts running containers
3. Runs migrations on development database
4. Seeds data into the dev database

| Containers      | What is it running  | What is it for                                        | Port |
| --------------- | ------------------- | ----------------------------------------------------- | ---- |
| pvocrm_nginx    | Nginx reverse proxy | Reverse proxy for frontend and backend                | 443  |
| pvocrm_backend  | NodeJs express      | Exposing API endpoints for executing database actions | 8000 |
| pvocrm_frontend | ReactJs             | CRM user interface                                    | 3000 |
| pvocrm_db       | POSTGRESQL database | Storing users, clients etc...                         | 5432 |

If the containers are running properly you can access the frontend at `localhost`.

Log in to the platform using the following credentials:

username: `test@test.com`
password: `password`

## Rebuild development environment

If you got redundant docker containers and images on your local machines you can use the following commands to remove those images:

```
docker rm $(docker ps -a -q) --force
docker rmi $(docker images -q) --force
docker volume rm $(docker volume ls -qf dangling=true)
```

## Running tests

In order to run tests after starting the devlopment server run the following:

```
make test
```

## Rebuild development environment

If you make any changes to the Dockerfiles or install any dependencies don't forget to rebuild the image using the following command:

```
make docker-build
```

## Database Diagram

```
https://dbdiagram.io/d/5c701489f7c5bb70c72f186a
```

## Production Database Migrations

The production build does not run database migrations autmatically.

For running migrations inside the `pvocrm_backend` container go to the folder `/usr/src/pvocrm_backend` and run the following command:

```
npm run db-migrate-latest
```

If you want to roll back migrations:

```
npm run db-migrate-rollback
```
