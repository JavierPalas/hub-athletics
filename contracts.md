# Hub Athletics - Contrato de Integracion Frontend-Backend

Este documento describe la integracion real del proyecto activo.

## 1. Datos estaticos en frontend

Archivo: `frontend/src/mock.js`

- `testimonials`: testimonios mostrados en la landing.
- `hubLabBenefits`: beneficios del metodo HUB LAB.
- `socialLinks`: enlaces a Instagram y YouTube.

Estos datos siguen siendo estaticos y no dependen de backend.

## 2. Modelo de datos actual

Tabla MySQL: `leads`

```json
{
  "id": "lead_...",
  "name": "Carlos Mendez",
  "email": "carlos@example.com",
  "phone": "+34 600 000 000",
  "source": "web_form",
  "created_at": "2026-04-05 10:30:00"
}
```

Reglas:

- `name`: obligatorio, minimo 2 caracteres.
- `email`: obligatorio, formato valido y unico.
- `phone`: obligatorio, minimo 7 caracteres.
- `source`: se guarda como `web_form`.

## 3. API disponible

### `GET /api`

Respuesta de estado de la API.

### `POST /api/leads`

Crea un nuevo lead desde el formulario de la landing.

Request body:

```json
{
  "name": "Carlos Mendez",
  "email": "carlos@example.com",
  "phone": "+34 600 000 000"
}
```

Respuesta correcta:

```json
{
  "success": true,
  "message": "Bienvenido al HUB. Nos pondremos en contacto contigo pronto.",
  "data": {
    "id": "lead_...",
    "name": "Carlos Mendez",
    "email": "carlos@example.com",
    "phone": "+34 600 000 000",
    "created_at": "2026-04-05 10:30:00"
  }
}
```

Errores previstos:

- `400`: campos incompletos o formato invalido.
- `409`: email ya registrado.
- `500`: error interno.

## 4. Integracion en frontend

Archivo principal: `frontend/src/components/Unete.jsx`

Comportamiento actual:

1. El usuario completa nombre, email y telefono.
2. El frontend limpia espacios y valida campos requeridos.
3. Se envia `POST` a `${REACT_APP_BACKEND_URL}/api/leads` o a `/api/leads` si no hay variable.
4. Se muestra toast de exito o error segun respuesta.

## 5. Configuracion

### Frontend

- `REACT_APP_BACKEND_URL=https://vibe.hub-athletics.com`

### Backend

- `DB_HOST`
- `DB_NAME`
- `DB_USERNAME`
- `DB_PASSWORD`
- `CORS_ALLOWED_ORIGINS`

## 6. Casos de prueba recomendados

1. Alta valida con nombre, email y telefono.
2. Error por nombre vacio.
3. Error por email vacio.
4. Error por telefono vacio.
5. Error por email invalido.
6. Error por email duplicado.
