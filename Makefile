.PHONY: up down logs build deploy deploy-no-pull update update-no-pull

up:
	./scripts/up.sh

deploy:
	./scripts/deploy.sh

update:
	./scripts/update.sh

deploy-no-pull:
	./scripts/deploy.sh --no-pull

update-no-pull:
	./scripts/deploy.sh --no-pull

down:
	docker compose down

logs:
	docker compose logs -f

build:
	docker compose build --no-cache
