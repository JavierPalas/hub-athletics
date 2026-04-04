<?php
// db.php - Configuracion de base de datos y CORS

function getEnvOrDefault($key, $default)
{
    $value = getenv($key);
    return $value !== false && $value !== '' ? $value : $default;
}

function getAllowedOrigins()
{
    $configuredOrigins = getEnvOrDefault(
        'CORS_ALLOWED_ORIGINS',
        'https://vibe.hub-atheltics.com,http://localhost:3000'
    );

    return array_values(array_filter(array_map('trim', explode(',', $configuredOrigins))));
}

function setCorsHeaders()
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $host = $_SERVER['HTTP_HOST'] ?? '';
    $allowedOrigins = getAllowedOrigins();

    header('Vary: Origin');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    header('Access-Control-Max-Age: 86400');
    header('Content-Type: application/json; charset=UTF-8');

    if ($origin !== '') {
        $originHost = parse_url($origin, PHP_URL_HOST);
        $sameHostRequest = $originHost !== null && $originHost === $host;

        if ($sameHostRequest || in_array($origin, $allowedOrigins, true)) {
            header('Access-Control-Allow-Origin: ' . $origin);
            return;
        }
    }

    if (!empty($allowedOrigins)) {
        header('Access-Control-Allow-Origin: ' . $allowedOrigins[0]);
    }
}

setCorsHeaders();

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$host = getEnvOrDefault('DB_HOST', 'localhost');
$db_name = getEnvOrDefault('DB_NAME', 'u273474555_hub');
$username = getEnvOrDefault('DB_USERNAME', 'u273474555_admin');
$password = getEnvOrDefault('DB_PASSWORD', '@123456gO@');

$conn = null;

try {
    $conn = new PDO(
        'mysql:host=' . $host . ';dbname=' . $db_name . ';charset=utf8mb4',
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );
} catch (PDOException $exception) {
    error_log('Database connection error: ' . $exception->getMessage());

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error de conexion a la base de datos',
    ]);
    exit;
}
?>