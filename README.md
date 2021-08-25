# rcbxd.dev v2.0

I want to completely re-think my website to attract more clients and companies.

## Development

### Dependencies

- Docker
- Git
- Make (optional)

### Instructions

Pull the repository on your own machine: `git pull https://github.com/rcbxd/website-2.0.git`

Build the services `make build-services` or `docker-compose build`

Run the services `make start-services` or `docker-compose up -d`

## Microservices

- Mordor — Next.js static
- Cacheslave — Redis cache
- Postman — the mail service that is written in Node.js + Express.
- ServiceCruncher — microservice that tracks the uptime of other services as well as allows the admin to turn them on/off
- ServiceCruncherUI — controls the ServiceCruncher backend
- Guard — the auth service
- Kron — cron-job manager
- Nginx — load balancer and reverse proxy

## Tech stack

- Next.js
- React.js
- HTML
- CSS
- Golang
- Redis
- Express.js
- Jest
- Morgan
- Node-mailer
- Docker
- Docker-compose
- Docker swarm
- GitHub Actions
- Webhooks
- Nginx
- PostgreSQL
