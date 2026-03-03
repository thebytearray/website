.PHONY: deploy deploy-no-pull build up down logs

deploy:
	./scripts/deploy.sh

deploy-no-pull:
	./scripts/deploy.sh --no-pull

build:
	docker compose build --no-cache

up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f
