<?php
// leads.php - API para gestión de leads
include_once 'db.php';

// Si db.php ya manejó OPTIONS, no llegamos aquí
$method = $_SERVER['REQUEST_METHOD'];

// Función para enviar respuesta JSON
function sendResponse($success, $message, $data = null, $httpCode = 200) {
    http_response_code($httpCode);
    $response = [
        "success" => $success,
        "message" => $message
    ];
    if ($data !== null) {
        $response["data"] = $data;
    }
    echo json_encode($response);
    exit;
}

// Función para enviar email de notificación
function sendNotificationEmail($name, $email, $created_at) {
    $admin_email = "palas.javier@gmail.com";
    $subject = "=?UTF-8?B?" . base64_encode("Nuevo Lead HUB ATHLETICS: " . $name) . "?=";
    
    $message_body = "Has recibido un nuevo lead desde la web:\n\n";
    $message_body .= "Nombre: " . $name . "\n";
    $message_body .= "Email: " . $email . "\n";
    $message_body .= "Fecha: " . $created_at . "\n";
    
    $headers = [];
    $headers[] = "From: HUB Athletics <no-reply@hub-athletics.com>";
    $headers[] = "Reply-To: " . $email;
    $headers[] = "X-Mailer: PHP/" . phpversion();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-Type: text/plain; charset=UTF-8";
    $headers[] = "Content-Transfer-Encoding: 8bit";
    
    return @mail($admin_email, $subject, $message_body, implode("\r\n", $headers));
}

if ($method === 'POST') {
    // Verificar que tenemos conexión a la BD
    global $conn;
    if ($conn === null) {
        sendResponse(false, "Error de conexión a la base de datos", null, 500);
    }

    // Recibir datos JSON
    $rawInput = file_get_contents("php://input");
    $data = json_decode($rawInput);
    
    // Verificar que el JSON es válido
    if (json_last_error() !== JSON_ERROR_NONE) {
        sendResponse(false, "Datos JSON inválidos", null, 400);
    }

    // Validar campos requeridos
    if (empty($data->name) || empty($data->email)) {
        sendResponse(false, "Por favor completa todos los campos", null, 400);
    }
    
    // Validar formato de email
    if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
        sendResponse(false, "El formato del email no es válido", null, 400);
    }

    // Sanitizar datos
    $name = htmlspecialchars(strip_tags(trim($data->name)));
    $email = filter_var(trim($data->email), FILTER_SANITIZE_EMAIL);
    $id = uniqid('lead_', true);
    $created_at = date('Y-m-d H:i:s');
    $source = "web_form";

    try {
        // Insertar en la base de datos
        $query = "INSERT INTO leads (id, name, email, source, created_at) VALUES (:id, :name, :email, :source, :created_at)";
        $stmt = $conn->prepare($query);

        $stmt->bindParam(":id", $id, PDO::PARAM_STR);
        $stmt->bindParam(":name", $name, PDO::PARAM_STR);
        $stmt->bindParam(":email", $email, PDO::PARAM_STR);
        $stmt->bindParam(":source", $source, PDO::PARAM_STR);
        $stmt->bindParam(":created_at", $created_at, PDO::PARAM_STR);

        if ($stmt->execute()) {
            // Intentar enviar email (no bloquea la respuesta si falla)
            sendNotificationEmail($name, $email, $created_at);

            sendResponse(
                true,
                "¡Bienvenido al HUB! Nos pondremos en contacto contigo pronto.",
                [
                    "id" => $id,
                    "name" => $name,
                    "email" => $email,
                    "created_at" => $created_at
                ],
                201
            );
        } else {
            sendResponse(false, "No se pudo guardar el lead", null, 500);
        }
    } catch (PDOException $e) {
        // Verificar si es un error de duplicado (email ya existe)
        if ($e->getCode() == 23000) {
            sendResponse(false, "Este email ya está registrado", null, 409);
        }
        sendResponse(false, "Error al procesar la solicitud: " . $e->getMessage(), null, 500);
    }

} elseif ($method === 'GET') {
    // Listar leads (para admin)
    global $conn;
    if ($conn === null) {
        sendResponse(false, "Error de conexión a la base de datos", null, 500);
    }
    
    try {
        $query = "SELECT * FROM leads ORDER BY created_at DESC";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $leads = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            "success" => true,
            "data" => $leads,
            "count" => count($leads)
        ]);
    } catch (PDOException $e) {
        sendResponse(false, "Error al obtener leads: " . $e->getMessage(), null, 500);
    }

} else {
    sendResponse(false, "Método no permitido", null, 405);
}
?>
