# Hub Athletics - Guía de Instalación en Servidor

## Requisitos del Servidor

### Software Necesario:
- **Node.js** (v18 o superior) - para el frontend React
- **Python** (v3.11 o superior) - para el backend FastAPI
- **MongoDB** (v4.4 o superior) - base de datos
- **Nginx** (opcional) - servidor web para producción

### Recursos Recomendados:
- **RAM**: Mínimo 2GB, recomendado 4GB
- **Disco**: Mínimo 10GB libres
- **CPU**: 2 cores recomendado

---

## Instalación Paso a Paso

### 1. Descomprimir el Archivo
```bash
unzip hub-athletics.zip
cd hub-athletics
```

### 2. Configurar Backend

#### 2.1 Instalar dependencias Python
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
```

#### 2.2 Configurar variables de entorno
Editar el archivo `backend/.env`:
```bash
MONGO_URL=mongodb://localhost:27017
DB_NAME=hub_athletics
CORS_ORIGINS=*
```

**IMPORTANTE**: Cambia `MONGO_URL` si tu MongoDB está en otro servidor.

#### 2.3 Iniciar MongoDB
```bash
# Ubuntu/Debian
sudo systemctl start mongodb
sudo systemctl enable mongodb

# MacOS (con Homebrew)
brew services start mongodb-community

# Verificar que esté corriendo
mongo --eval "db.adminCommand('ping')"
```

### 3. Configurar Frontend

#### 3.1 Instalar dependencias Node.js
```bash
cd ../frontend
npm install
# o si usas yarn:
yarn install
```

#### 3.2 Configurar variables de entorno
Editar el archivo `frontend/.env`:
```bash
# Para desarrollo local
REACT_APP_BACKEND_URL=http://localhost:8001

# Para producción (cambiar por tu dominio)
REACT_APP_BACKEND_URL=https://tu-dominio.com
```

---

## Ejecución en Modo Desarrollo

### Opción 1: Ejecutar Manualmente

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
# o
yarn start
```

La aplicación estará disponible en:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8001
- API Docs: http://localhost:8001/docs

### Opción 2: Usar PM2 (Recomendado para Producción)

#### Instalar PM2
```bash
npm install -g pm2
```

#### Crear archivo de configuración PM2
Crear `ecosystem.config.js` en la raíz:
```javascript
module.exports = {
  apps: [
    {
      name: 'hub-athletics-backend',
      cwd: './backend',
      script: 'venv/bin/uvicorn',
      args: 'server:app --host 0.0.0.0 --port 8001',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'hub-athletics-frontend',
      cwd: './frontend',
      script: 'npm',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false
    }
  ]
};
```

#### Iniciar con PM2
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

---

## Compilar para Producción

### 1. Build del Frontend
```bash
cd frontend
npm run build
# o
yarn build
```

Esto creará una carpeta `frontend/build` con los archivos estáticos optimizados.

### 2. Configurar Nginx

Crear archivo `/etc/nginx/sites-available/hub-athletics`:
```nginx
server {
    listen 80;
    server_name tu-dominio.com;

    # Frontend (archivos estáticos)
    location / {
        root /ruta/a/hub-athletics/frontend/build;
        try_files $uri /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

Activar el sitio:
```bash
sudo ln -s /etc/nginx/sites-available/hub-athletics /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 3. SSL con Let's Encrypt (Recomendado)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d tu-dominio.com
```

---

## Verificación de Instalación

### 1. Verificar Backend
```bash
curl http://localhost:8001/api/
# Debe responder: {"message":"Hub Athletics API"}
```

### 2. Verificar MongoDB
```bash
curl http://localhost:8001/api/leads
# Debe responder: [] (array vacío)
```

### 3. Verificar Frontend
Abrir navegador en: http://localhost:3000

---

## Base de Datos - Estructura

### Colección: leads
```javascript
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "source": "web_form",
  "created_at": "datetime"
}
```

### Ver leads en MongoDB
```bash
mongo
use hub_athletics
db.leads.find().pretty()
```

---

## Mantenimiento

### Ver logs con PM2
```bash
pm2 logs
pm2 logs hub-athletics-backend
pm2 logs hub-athletics-frontend
```

### Reiniciar servicios
```bash
pm2 restart all
# o específico
pm2 restart hub-athletics-backend
```

### Backup de MongoDB
```bash
mongodump --db hub_athletics --out /ruta/backup/
```

### Restaurar MongoDB
```bash
mongorestore --db hub_athletics /ruta/backup/hub_athletics/
```

---

## Actualización de Enlaces Sociales

Editar `frontend/src/mock.js`:
```javascript
socialLinks: {
  instagram: "https://instagram.com/tu-cuenta",
  youtube: "https://youtube.com/@tu-canal",
  linkedin: "https://linkedin.com/company/tu-empresa"
}
```

Luego recompilar:
```bash
cd frontend
npm run build
```

---

## Solución de Problemas Comunes

### Error: "Cannot connect to MongoDB"
- Verificar que MongoDB esté corriendo: `sudo systemctl status mongodb`
- Verificar la URL en `backend/.env`

### Error: "CORS policy blocked"
- Verificar `CORS_ORIGINS` en `backend/.env`
- Asegurarse de incluir el dominio correcto

### Frontend no carga el backend
- Verificar `REACT_APP_BACKEND_URL` en `frontend/.env`
- Asegurarse de que el backend esté corriendo
- Verificar firewall y puertos abiertos

### Puerto ya en uso
```bash
# Ver qué proceso usa el puerto
lsof -i :8001  # Backend
lsof -i :3000  # Frontend

# Matar el proceso
kill -9 <PID>
```

---

## Información de Contacto y Soporte

Para problemas o preguntas sobre la instalación, revisar:
- Logs del backend: `backend/logs/` o PM2 logs
- Logs del frontend: Browser console (F12)
- Logs de Nginx: `/var/log/nginx/error.log`

---

## Arquitectura de la Aplicación

```
hub-athletics/
├── frontend/              # React Application
│   ├── src/
│   │   ├── components/   # Componentes React
│   │   ├── App.js        # Componente principal
│   │   └── mock.js       # Datos estáticos
│   ├── public/
│   └── package.json
│
├── backend/              # FastAPI Application
│   ├── routes/          # API endpoints
│   │   └── leads.py     # Rutas de leads
│   ├── models/          # Modelos de datos
│   │   └── lead.py      # Modelo Lead
│   ├── server.py        # Aplicación principal
│   └── requirements.txt
│
└── README_DEPLOYMENT.md  # Este archivo
```

---

## Licencia

Hub Athletics - Todos los derechos reservados © 2025
