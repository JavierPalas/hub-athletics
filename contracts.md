# Hub Athletics - Contrato de Integración Frontend-Backend

## 1. DATOS MOCKEADOS EN FRONTEND

### Archivo: `/app/frontend/src/mock.js`
- **Testimonios**: Array de 3 testimonios con estructura {id, name, role, quote, image}
- **Beneficios HUB LAB**: Array de 4 beneficios con {id, title, description}
- **Enlaces Sociales**: {instagram, youtube, linkedin} - actualmente con "#"

**Nota**: Los testimonios y beneficios permanecerán como datos estáticos en el frontend (no requieren backend).

## 2. FUNCIONALIDAD A IMPLEMENTAR EN BACKEND

### 2.1 Modelo de Datos - Leads/Contactos
Colección: `leads`

```javascript
{
  _id: ObjectId,
  name: String (requerido),
  email: String (requerido, formato email),
  createdAt: DateTime (auto-generado),
  source: String (default: "web_form")
}
```

### 2.2 API Endpoints

#### POST `/api/leads`
**Descripción**: Crear un nuevo lead desde el formulario de contacto

**Request Body**:
```json
{
  "name": "Carlos Méndez",
  "email": "carlos@example.com"
}
```

**Response Success (201)**:
```json
{
  "success": true,
  "message": "Lead registrado exitosamente",
  "data": {
    "_id": "...",
    "name": "Carlos Méndez",
    "email": "carlos@example.com",
    "createdAt": "2025-12-25T16:00:00Z",
    "source": "web_form"
  }
}
```

**Response Error (400)**:
```json
{
  "success": false,
  "message": "Error de validación",
  "errors": ["Email inválido", "Nombre requerido"]
}
```

**Response Error (500)**:
```json
{
  "success": false,
  "message": "Error del servidor"
}
```

## 3. INTEGRACIÓN FRONTEND-BACKEND

### 3.1 Archivo a Modificar: `/app/frontend/src/components/Unete.jsx`

**Cambios necesarios**:
1. Importar axios y BACKEND_URL
2. Reemplazar el mock setTimeout con llamada real a la API
3. Manejar respuestas de éxito y error del backend
4. Mostrar mensajes apropiados usando toast

**Código a reemplazar**:
```javascript
// ANTES (Mock)
setTimeout(() => {
  console.log('Form submitted (mock):', formData);
  toast({ title: "¡Bienvenido al HUB!", ... });
  ...
}, 1000);

// DESPUÉS (Backend Real)
const response = await axios.post(`${API}/leads`, formData);
if (response.data.success) {
  toast({ title: "¡Bienvenido al HUB!", ... });
  ...
}
```

## 4. VALIDACIONES

### Backend
- Email válido (formato)
- Nombre no vacío (mínimo 2 caracteres)
- Email único (opcional: verificar duplicados)

### Frontend
- Ya implementado: validación de campos requeridos
- Validación de formato email (HTML5)

## 5. TESTING

### Backend Testing
1. POST con datos válidos → 201 success
2. POST sin nombre → 400 error
3. POST sin email → 400 error
4. POST con email inválido → 400 error

### Frontend Testing
1. Envío de formulario exitoso → Toast de éxito + limpieza de campos
2. Error de red → Toast de error
3. Validación de campos vacíos → Toast de error

## 6. FLUJO COMPLETO

1. Usuario completa formulario (nombre + email)
2. Click en "Empezar ahora"
3. Frontend valida campos (no vacíos)
4. Frontend envía POST a `/api/leads`
5. Backend valida datos
6. Backend guarda en MongoDB colección `leads`
7. Backend responde con success
8. Frontend muestra toast de éxito
9. Frontend limpia formulario

## 7. ARCHIVOS A CREAR/MODIFICAR

### Backend (Crear)
- `/app/backend/models/lead.py` - Modelo Pydantic
- `/app/backend/routes/leads.py` - Endpoints API

### Backend (Modificar)
- `/app/backend/server.py` - Importar y registrar router de leads

### Frontend (Modificar)
- `/app/frontend/src/components/Unete.jsx` - Integrar con API real

### Frontend (Eliminar código mock)
- Remover setTimeout y lógica simulada
