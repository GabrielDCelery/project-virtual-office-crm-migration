docker-build:
	docker-compose -f ./docker-compose.yml -f ./docker-compose.dev.yml build
dev:
	docker-compose -f ./docker-compose.yml -f ./docker-compose.dev.yml up
test:
	docker exec -it -e BACKEND_APP_PORT=8081 pvocrm_backend npm run test