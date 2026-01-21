#!/bin/bash

# Hub Athletics - Script de Instalación Rápida
# Este script instala y configura la aplicación automáticamente

set -e  # Detener en caso de error

echo "======================================"
echo "  Hub Athletics - Instalación"
echo "======================================"
echo ""

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para imprimir mensajes
print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${YELLOW}➜${NC} $1"
}

# 1. Verificar requisitos
print_info "Verificando requisitos del sistema..."

# Verificar Node.js
if ! command -v node &> /dev/null; then
    print_error "Node.js no está instalado"
    echo "Instala Node.js desde: https://nodejs.org/"
    exit 1
fi
print_success "Node.js $(node --version) encontrado"

# Verificar Python
if ! command -v python3 &> /dev/null; then
    print_error "Python 3 no está instalado"
    exit 1
fi
print_success "Python $(python3 --version) encontrado"

# Verificar MongoDB
if ! command -v mongod &> /dev/null; then
    print_error "MongoDB no está instalado"
    echo "Instala MongoDB desde: https://www.mongodb.com/try/download/community"
    echo "O ejecuta: sudo apt install mongodb (Ubuntu/Debian)"
    exit 1
fi
print_success "MongoDB encontrado"

echo ""
print_info "Todos los requisitos cumplidos"
echo ""

# 2. Configurar Backend
print_info "Configurando Backend..."
cd backend

# Crear entorno virtual
if [ ! -d "venv" ]; then
    python3 -m venv venv
    print_success "Entorno virtual creado"
fi

# Activar entorno virtual
source venv/bin/activate

# Instalar dependencias
pip install -q -r requirements.txt
print_success "Dependencias de Python instaladas"

cd ..

# 3. Configurar Frontend
print_info "Configurando Frontend..."
cd frontend

# Detectar gestor de paquetes
if command -v yarn &> /dev/null; then
    print_info "Usando Yarn..."
    yarn install --silent
else
    print_info "Usando NPM..."
    npm install --silent
fi
print_success "Dependencias de Node.js instaladas"

cd ..

# 4. Iniciar MongoDB
print_info "Iniciando MongoDB..."
if systemctl is-active --quiet mongodb 2>/dev/null; then
    print_success "MongoDB ya está corriendo"
elif systemctl is-active --quiet mongod 2>/dev/null; then
    print_success "MongoDB ya está corriendo"
else
    # Intentar iniciar MongoDB
    if command -v systemctl &> /dev/null; then
        sudo systemctl start mongodb 2>/dev/null || sudo systemctl start mongod 2>/dev/null || true
    fi
    print_success "MongoDB iniciado"
fi

echo ""
echo "======================================"
echo "  ✓ Instalación Completada"
echo "======================================"
echo ""
echo "Para iniciar la aplicación:"
echo ""
echo "  Opción 1 - Manual (2 terminales):"
echo "  ----------------------------------"
echo "  Terminal 1 (Backend):"
echo "    cd backend"
echo "    source venv/bin/activate"
echo "    uvicorn server:app --host 0.0.0.0 --port 8001 --reload"
echo ""
echo "  Terminal 2 (Frontend):"
echo "    cd frontend"
echo "    npm start"
echo ""
echo "  Opción 2 - Script automático:"
echo "  ----------------------------------"
echo "    ./start.sh"
echo ""
echo "La aplicación estará disponible en:"
echo "  • Frontend: http://localhost:3000"
echo "  • Backend:  http://localhost:8001"
echo "  • API Docs: http://localhost:8001/docs"
echo ""
