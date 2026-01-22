# SUBIDA A HOSTINGER - INSTRUCCIONES BREVES

## 1️⃣ BORRAR TODO en `public_html`

- Entra en Administrador de Archivos de Hostinger
- Borra todo lo que hay en `public_html`

## 2️⃣ SUBIR FRONTEND (Raíz de `public_html`)

Sube TODO el contenido de esta carpeta:

```
d:\Dropbox\0_Antigravity\hub-athletics-magenta\frontend\build\
```

**Directamente a la raíz de `public_html`** (NO en subcarpeta)

Incluye:

- `index.html`
- `favicon.ico`
- `manifest.json`
- Carpetas: `static/`, etc.

## 3️⃣ CREAR CARPETA `api` en `public_html`

- Crea carpeta: `public_html/api`

## 4️⃣ SUBIR BACKEND a `public_html/api`

Sube estos 4 archivos desde:

```
d:\Dropbox\Z_Oficina\Escritorio OF\hostinger_backend_php\
```

A la carpeta `public_html/api/`:

- ✅ `.htaccess`
- ✅ `db.php`
- ✅ `index.php`
- ✅ `leads.php`

## 5️⃣ BASE DE DATOS (phpMyAdmin)

1. Entra en **phpMyAdmin** desde Hostinger
2. Selecciona base de datos: `u273474555_hub`
3. Pestaña **SQL**
4. Pega esto y ejecuta:

```sql
CREATE TABLE IF NOT EXISTS `leads` (
  `id` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `source` varchar(50) DEFAULT 'web_form',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

## ✅ VERIFICAR

- Web: `https://tudominio.com` → ver la web
- API: `https://tudominio.com/api` → {"message": "Hub Athletics API (PHP Version)"}
- Formulario: rellenar y recibir email en `palas.javier@gmail.com`

---
**FIN** 🚀
