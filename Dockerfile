# Etapa base
FROM node:18-alpine AS base

RUN npm i -g pnpm

# Etapa de dependencias
FROM base AS dependencies

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Etapa de construcción para desarrollo
FROM base AS build-dev

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm build

# Etapa de construcción para producción
FROM base AS build-prod

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm build

# Instalar geoipupdate y actualizar bases de datos GeoIP
RUN apk add --no-cache geoipupdate
COPY src/geodb/GeoIP.conf /etc/GeoIP.conf
RUN geoipupdate -f /etc/GeoIP.conf -d /app/src/geodb/
RUN pnpm prune --prod

# Etapa final para desarrollo
FROM base AS deploy-dev

WORKDIR /app
COPY --from=build-dev /app/dist/ ./dist/
COPY --from=build-dev /app/node_modules ./node_modules

CMD [ "node", "dist/main.js" ]

# Etapa final para producción
FROM base AS deploy-prod

WORKDIR /app
COPY --from=build-prod /app/dist/ ./dist/
COPY --from=build-prod /app/node_modules ./node_modules

CMD [ "node", "dist/main.js" ]
