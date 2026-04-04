<?php
// leads.php - API para gestion de leads
include_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

function sendResponse($success, $message, $data = null, $httpCode = 200)
{
    http_response_code($httpCode);
    $response = [
        'success' => $success,
        'message' => $message,
    ];

    if ($data !== null) {
        $response['data'] = $data;
    }

    echo json_encode($response);
    exit;
}

function sendNotificationEmail($name, $email, $phone, $created_at)
{
    $admin_email = 'palas.javier@gmail.com';
    $subject = '=?UTF-8?B?' . base64_encode('Nuevo Lead HUB ATHLETICS: ' . $name) . '?=';

    $message_body = "Has recibido un nuevo lead desde la web:\n\n";
    $message_body .= 'Nombre: ' . $name . "\n";
    $message_body .= 'Email: ' . $email . "\n";
    $message_body .= 'Telefono: ' . $phone . "\n";
    $message_body .= 'Fecha: ' . $created_at . "\n";

    $headers = [];
    $headers[] = 'From: HUB Athletics <no-reply@hub-athletics.com>';
    $headers[] = 'Reply-To: ' . $email;
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $headers[] = 'Content-Transfer-Encoding: 8bit';

    return @mail($admin_email, $subject, $message_body, implode("\r\n", $headers));
}

function normalizeInput($value)
{
    return htmlspecialchars(strip_tags(trim((string) $value)));
}

if ($method === 'POST') {
    global $conn;

    if ($conn === null) {
        sendResponse(false, 'Error de conexion a la base de datos', null, 500);
    }

    $rawInput = file_get_contents('php://input');
    $data = json_decode($rawInput, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        sendResponse(false, 'Datos JSON invalidos', null, 400);
    }

    $name = normalizeInput($data['name'] ?? '');
    $email = filter_var(trim((string) ($data['email'] ?? '')), FILTER_SANITIZE_EMAIL);
    $phone = normalizeInput($data['phone'] ?? '');

    if ($name === '' || $email === '' || $phone === '') {
        sendResponse(false, 'Por favor completa nombre, email y telefono', null, 400);
    }

    if (mb_strlen($name) < 2) {
        sendResponse(false, 'El nombre debe tener al menos 2 caracteres', null, 400);
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        sendResponse(false, 'El formato del email no es valido', null, 400);
    }

    if (mb_strlen($phone) < 7) {
        sendResponse(false, 'Introduce un telefono valido', null, 400);
    }

    $id = uniqid('lead_', true);
    $created_at = date('Y-m-d H:i:s');
    $source = 'web_form';

    try {
        $existingLeadQuery = 'SELECT id FROM leads WHERE email = :email LIMIT 1';
        $existingLeadStmt = $conn->prepare($existingLeadQuery);
        $existingLeadStmt->bindParam(':email', $email, PDO::PARAM_STR);
        $existingLeadStmt->execute();

        if ($existingLeadStmt->fetch()) {
            sendResponse(false, 'Este email ya esta registrado', null, 409);
        }

        $query = 'INSERT INTO leads (id, name, email, phone, source, created_at) VALUES (:id, :name, :email, :phone, :source, :created_at)';
        $stmt = $conn->prepare($query);

        $stmt->bindParam(':id', $id, PDO::PARAM_STR);
        $stmt->bindParam(':name', $name, PDO::PARAM_STR);
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->bindParam(':phone', $phone, PDO::PARAM_STR);
        $stmt->bindParam(':source', $source, PDO::PARAM_STR);
        $stmt->bindParam(':created_at', $created_at, PDO::PARAM_STR);

        if (!$stmt->execute()) {
            sendResponse(false, 'No se pudo guardar el lead', null, 500);
        }

        sendNotificationEmail($name, $email, $phone, $created_at);

        sendResponse(
            true,
            'Bienvenido al HUB. Nos pondremos en contacto contigo pronto.',
            [
                'id' => $id,
                'name' => $name,
                'email' => $email,
                'phone' => $phone,
                'created_at' => $created_at,
            ],
            201
        );
    } catch (PDOException $e) {
        error_log('Lead creation error: ' . $e->getMessage());

        if ((string) $e->getCode() === '23000') {
            sendResponse(false, 'Este email ya esta registrado', null, 409);
        }

        sendResponse(false, 'Error al procesar la solicitud', null, 500);
    }
}

if ($method === 'GET') {
    global $conn;

    if ($conn === null) {
        sendResponse(false, 'Error de conexion a la base de datos', null, 500);
    }

    try {
        $query = 'SELECT * FROM leads ORDER BY created_at DESC';
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $leads = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            'success' => true,
            'data' => $leads,
            'count' => count($leads),
        ]);
        exit;
    } catch (PDOException $e) {
        error_log('Lead fetch error: ' . $e->getMessage());
        sendResponse(false, 'Error al obtener leads', null, 500);
    }
}

header('Allow: GET, POST, OPTIONS');
sendResponse(false, 'Metodo no permitido', null, 405);
?>
