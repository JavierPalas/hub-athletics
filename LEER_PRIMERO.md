# Hub Athletics - Leer Primero

Este proyecto esta compuesto por:

- `frontend/`: codigo fuente de la landing en React.
- `backend_php/`: API PHP para captar leads y guardarlos en MySQL.

## Flujo real de despliegue

1. Construir el frontend desde `frontend/` con `npm run build`.
2. Subir el contenido generado de `frontend/build/` a la raiz de `public_html`.
3. Crear la carpeta `public_html/api`.
4. Subir el contenido de `backend_php/` dentro de `public_html/api`.
5. Ejecutar `schema.sql` en MySQL o phpMyAdmin para crear la tabla `leads`.

## Estructura esperada en hosting

```text
public_html/
|-- index.html
|-- favicon.ico
|-- static/
`-- api/
    |-- .htaccess
    |-- db.php
    |-- index.php
    |-- leads.php
    `-- schema.sql
```

## Configuracion recomendada

- Frontend: `REACT_APP_BACKEND_URL=https://vibe.hub-athletics.com`
- Backend:
  - `DB_HOST`
  - `DB_NAME`
  - `DB_USERNAME`
  - `DB_PASSWORD`
  - `CORS_ALLOWED_ORIGINS`

Si no defines variables de entorno en el backend, `db.php` usa valores por defecto pensados para entorno local.

## Verificaciones rapidas

- Web: `https://vibe.hub-athletics.com`
- API base: `https://vibe.hub-athletics.com/api`
- Endpoint de leads: `POST https://vibe.hub-athletics.com/api/leads`
- Formulario: enviar nombre, email y telefono y comprobar alta en base de datos y email de aviso
