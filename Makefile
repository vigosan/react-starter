.DEFAULT_GOAL := default
.PHONY: up down reload console logs

up:
	docker-compose up -d

down:
	docker-compose down

reload:
	make down
	make up
	make logs

console:
	docker-compose run --rm $(filter-out $@, $(MAKECMDGOALS)) /bin/sh

logs:
	docker-compose logs -f $(filter-out $@, $(MAKECMDGOALS))

default:
	make up
	make logs

