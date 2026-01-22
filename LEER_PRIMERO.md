# 📦 ARCHIVOS ZIP PARA HOSTINGER

## Archivos Creados

### 1️⃣ `hostinger_frontend.zip`

**Ubicación:** `d:\Dropbox\0_Antigravity\hub-athletics-magenta\hostinger_frontend.zip`

**Qué contiene:** Todo el frontend compilado (HTML, CSS, JS, imágenes, favicon, etc.)

**Dónde subirlo en Hostinger:**

- Descomprimir **directamente en la raíz** de `public_html`
- NO crear subcarpeta, los archivos deben quedar así:

  ```
  public_html/
  ├── index.html
  ├── favicon.ico
  ├── manifest.json
  └── static/
  ```

---

### 2️⃣ `hostinger_backend.zip`

**Ubicación:** `d:\Dropbox\0_Antigravity\hub-athletics-magenta\hostinger_backend.zip`

**Qué contiene:**

- `.htaccess` (configuración URLs)
- `db.php` (conexión base de datos con tus credenciales)
- `index.php` (API base)
- `leads.php` (formulario + email)
- `schema.sql` (crear tabla en phpMyAdmin)

**Dónde subirlo en Hostinger:**

1. Crear carpeta `public_html/api`
2. Descomprimir el ZIP **dentro de** `public_html/api`
3. Los archivos deben quedar así:

   ```
   public_html/api/
   ├── .htaccess
   ├── db.php
   ├── index.php
   ├── leads.php
   └── schema.sql
   ```

---

## 🚀 PASOS RÁPIDOS

1. **Borrar** todo de `public_html` en Hostinger
2. **Subir y descomprimir** `hostinger_frontend.zip` en `public_html`
3. **Crear** carpeta `public_html/api`
4. **Subir y descomprimir** `hostinger_backend.zip` en `public_html/api`
5. **phpMyAdmin**: ejecutar el SQL de `schema.sql` (está dentro del ZIP backend)

---

## ✅ Verificar

- Web: `https://tudominio.com`
- API: `https://tudominio.com/api`
- Formulario: rellenar y esperar email en `palas.javier@gmail.com`

**¡LISTO!** 🎉
