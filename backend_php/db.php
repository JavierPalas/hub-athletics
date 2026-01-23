<?php
// db.php - Configuración de base de datos con CORS completo

// CORS Headers - Permitir todas las solicitudes
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Max-Age: 86400");
header("Content-Type: application/json; charset=UTF-8");

// Si es una solicitud OPTIONS (preflight), responder inmediatamente
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Configuración de la base de datos
$host = "localhost";
$db_name = "u273474555_hub";
$username = "u273474555_admin";
$password = "@123456gO@";

$conn = null;

try {
    $conn = new PDO(
        "mysql:host=" . $host . ";dbname=" . $db_name . ";charset=utf8mb4",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]
    );
} catch(PDOException $exception) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Error de conexión a la base de datos",
        "debug" => $exception->getMessage()
    ]);
    exit;
}
?>
