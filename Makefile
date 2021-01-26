.DEFAULT_GOAL := default
.PHONY: up down reload e2e console logs

up:
	docker-compose up -d client

down:
	docker-compose down

reload:
	make down
	make up
	make logs

e2e:
	docker-compose run --rm e2e

console:
	docker-compose run --rm $(filter-out $@, $(MAKECMDGOALS)) /bin/sh

logs:
	docker-compose logs -f $(filter-out $@, $(MAKECMDGOALS))

default:
	make up
	make logs
