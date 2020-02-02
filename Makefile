clean-dev:
	docker rm $$(docker ps -a -q) --force
	docker rmi $$(docker images -q) --force
	docker volume rm $$(docker volume ls -qf dangling=true)
	docker-compose -f ./docker-compose.yml -f ./docker-compose.dev.yml up
docker-build:
	docker-compose -f ./docker-compose.yml -f ./docker-compose.dev.yml build
dev:
	docker-compose -f ./docker-compose.yml -f ./docker-compose.dev.yml up
test:
	docker exec -it -e BACKEND_APP_PORT=8081 pvocrm_backend npm run test