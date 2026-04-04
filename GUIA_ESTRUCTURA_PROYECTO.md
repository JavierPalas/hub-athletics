# Estructura del Proyecto Hub Athletics

Esta guia refleja la estructura real del workspace a fecha actual.

## Carpetas principales

### `frontend/`

Es la aplicacion web en React.

- `src/`: componentes, estilos, assets y logica de la landing.
- `public/`: archivos estaticos base.
- `package.json`: dependencias y scripts (`start`, `build`, `test`).

### `backend_php/`

Es la API desplegable en hosting PHP tradicional.

- `index.php`: respuesta base de la API.
- `db.php`: conexion PDO y configuracion CORS.
- `leads.php`: alta y listado de leads.
- `schema.sql`: esquema MySQL.
- `.htaccess`: reescritura de rutas `/api`.

### Archivos de documentacion

- `LEER_PRIMERO.md`: despliegue resumido.
- `contracts.md`: contrato funcional actual entre frontend y backend.
- `Base de Datos.jpg`: referencia visual del modelo de datos.

## Notas importantes

- `frontend/node_modules/` puede existir localmente, pero no forma parte del codigo fuente.
- El backend historico en Python ya no forma parte de la version activa del proyecto.
- El formulario de la web trabaja con tres campos obligatorios: `name`, `email` y `phone`.

## Flujo de trabajo recomendado

1. Editar la web en `frontend/src`.
2. Ajustar backend y conexion en `backend_php`.
3. Construir frontend con `npm run build`.
4. Desplegar frontend y backend siguiendo `LEER_PRIMERO.md`.
