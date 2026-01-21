#!/bin/bash

# Hub Athletics - Script de Inicio Rápido
# Inicia el frontend y backend automáticamente

echo "======================================"
echo "  Hub Athletics - Iniciando..."
echo "======================================"
echo ""

# Función para limpiar procesos al salir
cleanup() {
    echo ""
    echo "Deteniendo servicios..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 0
}

trap cleanup EXIT INT TERM

# Verificar que MongoDB esté corriendo
if ! pgrep -x "mongod" > /dev/null; then
    echo "⚠️  MongoDB no está corriendo"
    echo "Inicia MongoDB con: sudo systemctl start mongodb"
    exit 1
fi

# Iniciar Backend
echo "➜ Iniciando Backend..."
cd backend
source venv/bin/activate
uvicorn server:app --host 0.0.0.0 --port 8001 --reload > /tmp/hub-backend.log 2>&1 &
BACKEND_PID=$!
cd ..

sleep 3

# Verificar que el backend inició
if ! kill -0 $BACKEND_PID 2>/dev/null; then
    echo "✗ Error: Backend no pudo iniciar"
    echo "Ver logs en: /tmp/hub-backend.log"
    exit 1
fi
echo "✓ Backend corriendo (PID: $BACKEND_PID)"

# Iniciar Frontend
echo "➜ Iniciando Frontend..."
cd frontend
if command -v yarn &> /dev/null; then
    yarn start > /tmp/hub-frontend.log 2>&1 &
else
    npm start > /tmp/hub-frontend.log 2>&1 &
fi
FRONTEND_PID=$!
cd ..

sleep 3

if ! kill -0 $FRONTEND_PID 2>/dev/null; then
    echo "✗ Error: Frontend no pudo iniciar"
    echo "Ver logs en: /tmp/hub-frontend.log"
    exit 1
fi
echo "✓ Frontend corriendo (PID: $FRONTEND_PID)"

echo ""
echo "======================================"
echo "  ✓ Aplicación Iniciada"
echo "======================================"
echo ""
echo "URLs:"
echo "  • Frontend: http://localhost:3000"
echo "  • Backend:  http://localhost:8001"
echo "  • API Docs: http://localhost:8001/docs"
echo ""
echo "Logs:"
echo "  • Backend:  /tmp/hub-backend.log"
echo "  • Frontend: /tmp/hub-frontend.log"
echo ""
echo "Presiona Ctrl+C para detener los servicios"
echo ""

# Mantener el script corriendo
wait
