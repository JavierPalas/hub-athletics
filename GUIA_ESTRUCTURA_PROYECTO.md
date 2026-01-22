# 📂 Estructura del Proyecto Hub Athletics

Este documento explica la organización del workspace y la finalidad de cada carpeta para facilitar el mantenimiento.

## 🏠 Carpetas Principales

### 🔴 `frontend/` (Código Fuente de la Web)

Es el directorio de trabajo principal para el diseño y la interfaz.

* **`src/`**: Aquí está todo el código visual (Componentes, Textos, Imágenes, Estilos). **Es donde editas la web.**
* **`public/`**: Archivos estáticos base (favicon, index.html).
* **`package.json`**: El archivo de configuración que lista las dependencias del proyecto.

### 🟣 `backend_php/` (Servidor para Hostinger)

Contiene la lógica del lado del servidor optimizada para funcionar en Hostinger.

* **`db.php`**: Archivo de conexión a la base de datos (contiene credenciales).
* **`leads.php`**: Script que procesa el formulario de contacto y envía los emails al administrador.
* **`schema.sql`**: Instrucciones para crear la tabla de datos en phpMyAdmin.

### ⚪ `backend/` (Legacy / Histórico)

Contiene la versión original del backend en Python. Se mantiene como referencia histórica o copia de seguridad del desarrollo inicial. No se utiliza en la versión de producción actual (PHP).

---

## 🛠️ Preguntas Frecuentes sobre Archivos Específicos

### 📦 ¿Qué es la carpeta `node_modules`?

Es el **"Almacén de Herramientas"** del proyecto.

* **Función:** Contiene todas las librerías de terceros que utiliza el proyecto (React, iconos, sistemas de animación, etc.). Es como los materiales de construcción prefabricados.
* **Tamaño:** Es muy pesada (cientos de MB) porque contiene miles de archivos pequeños.
* **Git:** **NO se sube al repositorio**. Está configurada en `.gitignore` para ser omitida automáticamente.
* **¿Por qué se omite?** Porque es **regenerable**. Cualquier desarrollador puede obtenerla de nuevo ejecutando `npm install`. Solo guardamos "la lista de la compra" (`package.json`), no "el supermercado entero".

### 🗑️ ¿Qué pasó con `hostinger_frontend`?

* Era una carpeta que contenía la versión "compilada" de la web (lista para subir).
* Se ha **eliminado del workspace** por limpieza, ya que esa información ya existe dentro del archivo comprimido `hostinger_frontend.zip` y siempre se puede volver a generar desde `frontend` cuando sea necesario.

---

## 🚀 Resumen del Flujo de Trabajo

1. **Diseño:** Editas los archivos en `frontend/src`.
2. **Configuración:** Ajustas contraseñas o emails en `backend_php`.
3. **Despliegue:** Sigues las instrucciones de `LEER_PRIMERO.md` para subir los archivos ZIP a Hostinger.
