
# Nest.js Project with Docker and PNPM

## Description

This is a [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository configured with Docker for both development and production environments. It uses `pnpm` for efficient package management and includes `geoipupdate` for GeoIP database updates.

## Docker Configuration

### Development

The project uses a `Dockerfile` and `docker-compose.dev.yml` for setting up the development environment, enabling hot-reloading:

```bash
docker-compose -f docker-compose.dev.yml up --build
```

This command builds the image and runs the service, mounting the necessary volumes for local development.

### Production

For production, `docker-compose.prod.yml` is used to set up an optimized and secure environment:

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

This command builds and runs the image in detached mode, suitable for production settings.

### Details

- **Base Image**: `node:18-alpine` is used for a lightweight and efficient environment.
- **PNPM**: `pnpm` is employed for dependency management, offering faster installations and efficient space usage.
- **GeoIP Update**: `geoipupdate` is included for downloading and updating the necessary GeoIP databases.
- **Multi-stage Builds**: The `Dockerfile` implements multi-stage builds to separate development and production stages.

## Installation

```bash
$ pnpm install
```

## Running the App

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Testing

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in Touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
