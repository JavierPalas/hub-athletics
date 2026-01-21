# Guía de Despliegue en Hostinger (Frontend y Backend PHP)

Este paquete te permite desplegar **toda** la aplicación en Hostinger usando solo alojamiento web esándar (sin VPS), aprovechando que Hostinger soporta PHP y MySQL nativamente.

## Archivos Necesarios

Tienes dos archivos ZIP:

1. `hostinger_frontend.zip`: Contiene la web (React).
2. `hostinger_backend_php.zip`: Contiene la API (PHP) que reemplaza al backend de Python.

---

## Paso 1: Configurar la Base de Datos

1. Entra a tu panel de Hostinger (hPanel).
2. Ve a **Base de Datos** -> **Gestión de Bases de Datos MySQL**.
3. Crea una nueva base de datos:
   - **Nombre de BD**: Anótalo (ej. `u123456_hubathletics`)
   - **Usuario**: Anótalo (ej. `u123456_admin`)
   - **Contraseña**: Crea una segura y anótala.
4. Entra a **phpMyAdmin** (botón al lado de tu nueva BD).
5. Selecciona tu base de datos a la izquierda.
6. Ve a la pestaña **Importar** y sube el archivo `backend_php/schema.sql` (está dentro del zip del backend, puedes extraerlo solo para esto o copiar el código de abajo).

   *O alternativamente, ve a la pestaña **SQL** y pega esto:*

   ```sql
   CREATE TABLE `leads` (
     `id` varchar(50) NOT NULL,
     `name` varchar(100) NOT NULL,
     `email` varchar(100) NOT NULL,
     `source` varchar(50) DEFAULT 'web_form',
     `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
     PRIMARY KEY (`id`)
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
   ```

---

## Paso 2: Subir el Backend (API)

1. Ve al **Administrador de Archivos** en Hostinger.
2. Entra en `public_html`.
3. Crea una carpeta llamada `api`.
4. Dentro de la carpeta `api`, sube y extrae `hostinger_backend_php.zip`.
5. **IMPORTANTE**: Edita el archivo `db.php` (click derecho -> Edit).
   - Actualiza `$db_name` con el nombre de tu BD.
   - Actualiza `$username` con tu usuario MySQL.
   - Actualiza `$password` con tu contraseña.
   - Guarda los cambios.

Tu backend ahora estará funcionado en `https://tudominio.com/api`.
Prueba entrar a `https://tudominio.com/api` y deberías ver `{"message":"Hub Athletics API (PHP Version)"}`.

---

## Paso 3: Subir el Frontend (Web)

1. Vuelve a la carpeta `public_html`.
2. Sube y extrae `hostinger_frontend.zip`.
3. Asegúrate que los archivos (`index.html`, etc.) queden en la raíz de `public_html` (o muévelos si quedaron en una subcarpeta).
4. Verifica que **NO** borraste la carpeta `api` que creamos antes.

---

## Paso 4: ¡Listo

Tu web debería cargar en `https://tudominio.com`.
El formulario de "Únete" conectará automáticamente con `https://tudominio.com/api/leads` y guardará los datos en tu base de datos MySQL de Hostinger.
