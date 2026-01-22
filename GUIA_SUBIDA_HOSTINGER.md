# Guía Rápida: Subir Backend Actualizado a Hostinger

## Archivos que necesitas subir

Debes subir estos **5 archivos** a tu carpeta `public_html/api` en Hostinger:

1. **db.php** - Contiene las credenciales actualizadas de tu base de datos
2. **leads.php** - Incluye la funcionalidad de envío de email a <palas.javier@gmail.com>
3. **index.php** - API de verificación
4. **.htaccess** - Configuración de URLs limpias
5. **schema.sql** - Script de creación de la tabla (solo para phpMyAdmin)

## Pasos para Subir

### 1. Acceso a Hostinger

1. Entra en tu panel de Hostinger: <https://hpanel.hostinger.com>
2. Selecciona tu dominio/hosting
3. Ve a **Archivos** → **Administrador de Archivos**

### 2. Preparar la Carpeta

1. Navega a la carpeta `public_html`
2. Si no existe la carpeta `api`, créala
3. Entra en la carpeta `api`

### 3. Subir Archivos

1. En el administrador de archivos de Hostinger, busca el botón **Subir archivos**
2. Selecciona y sube estos archivos desde tu carpeta local:

   ```
   d:\Dropbox\Z_Oficina\Escritorio OF\hostinger_backend_php\
   ├── .htaccess
   ├── db.php
   ├── index.php
   ├── leads.php
   └── schema.sql
   ```

3. Si algunos archivos ya existen, **sobrescríbelos** con los nuevos

### 4. Configurar la Base de Datos

1. En el panel de Hostinger, ve a **Bases de Datos** → **Gestión**
2. Haz clic en **Ingresar a phpMyAdmin**
3. Selecciona tu base de datos: `u273474555_hub`
4. Ve a la pestaña **SQL**
5. Copia el contenido del archivo `schema.sql` y pégalo
6. Haz clic en **Continuar** para ejecutar

### 5. Verificar Instalación

1. Abre tu navegador
2. Visita: `https://tudominio.com/api/index.php`
3. Deberías ver: `{"message": "Hub Athletics API (PHP Version)"}`

### 6. Probar el Formulario

1. Ve a tu sitio web: `https://tudominio.com`
2. Rellena el formulario de contacto
3. Deberías recibir un email en **<palas.javier@gmail.com>**

## Notas Importantes

✅ **Base de datos configurada:**

- Nombre: `u273474555_hub`
- Usuario: `u273474555_admin`
- Password: `@123456gO@`

✅ **Email de notificación:**

- Se enviará a: `palas.javier@gmail.com`

⚠️ **Importante sobre el From:**

- El campo `From` está configurado como `noreply@hub-athletics.com`
- Si tu dominio real es diferente, puedes cambiar esto en `leads.php` línea 38

---
**¿Problemas con el email?**
Si no recibes emails, es posible que necesites configurar SPF/DKIM en tu dominio en Hostinger. Contacta con el soporte de Hostinger si esto ocurre.
