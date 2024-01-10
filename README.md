# Proyecto Nest.js con Docker y PNPM

## Descripción

Este es un repositorio inicial de [Nest](https://github.com/nestjs/nest) framework TypeScript configurado con Docker para entornos de desarrollo y producción. Utiliza `pnpm` para una gestión eficiente de paquetes e incluye `geoipupdate` para actualizaciones de bases de datos GeoIP.

## Configuración de Docker

### Desarrollo

El proyecto utiliza un `Dockerfile` y `docker-compose.dev.yml` para configurar el entorno de desarrollo, habilitando la recarga en caliente (hot-reloading):

```bash
docker-compose -f docker-compose.dev.yml up --build
```

Este comando construye la imagen y ejecuta el servicio, montando los volúmenes necesarios para el desarrollo local.

### Producción

Para producción, se utiliza `docker-compose.prod.yml` para configurar un entorno optimizado y seguro:

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

Este comando construye y ejecuta la imagen en modo separado (detached), adecuado para entornos de producción.

### Detalles

- **Imagen Base**: Se utiliza `node:18-alpine` para un entorno ligero y eficiente.
- **PNPM**: Se emplea `pnpm` para la gestión de dependencias, ofreciendo instalaciones más rápidas y un uso eficiente del espacio.
- **Actualización de GeoIP**: Se incluye `geoipupdate` para descargar y actualizar las bases de datos GeoIP necesarias.
- **Construcciones Multi-etapa**: El `Dockerfile` implementa construcciones multi-etapa para separar las etapas de desarrollo y producción.

## Instalación

```bash
$ pnpm install
```

## Ejecutando la Aplicación

```bash
# desarrollo
$ pnpm run start

# modo observación
$ pnpm run start:dev

# modo producción
$ pnpm run start:prod
```

## Pruebas

```bash
# pruebas unitarias
$ pnpm run test

# pruebas e2e
$ pnpm run test:e2e

# cobertura de pruebas
$ pnpm run test:cov
```

## Apoyo

Nest es un proyecto de código abierto con licencia MIT. Puede crecer gracias a los patrocinadores y el apoyo de increíbles colaboradores. Si te gustaría unirte a ellos, por favor [lee más aquí](https://docs.nestjs.com/support).

## Mantente en Contacto

- Autor - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Sitio web - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Licencia

Nest tiene [licencia MIT](LICENSE).
