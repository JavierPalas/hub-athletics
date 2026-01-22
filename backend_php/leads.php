<?php
// leads.php
include_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'POST') {
    // Recibir datos JSON
    $data = json_decode(file_get_contents("php://input"));

    if(!empty($data->name) && !empty($data->email)) {
        // Validación básica
        $name = htmlspecialchars(strip_tags($data->name));
        $email = htmlspecialchars(strip_tags($data->email));
        $id = uniqid();
        $created_at = date('Y-m-d H:i:s');
        $source = "web_form";

        $query = "INSERT INTO leads SET id=:id, name=:name, email=:email, source=:source, created_at=:created_at";
        $stmt = $conn->prepare($query);

        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":source", $source);
        $stmt->bindParam(":created_at", $created_at);

        if($stmt->execute()) {
            // Enviar correo al administrador
            $admin_email = "palas.javier@gmail.com";
            $subject = "Nuevo Lead HUB ATHLETICS: " . $name;
            $message_body = "Has recibido un nuevo lead desde la web:\n\n";
            $message_body .= "Nombre: " . $name . "\n";
            $message_body .= "Email: " . $email . "\n";
            $message_body .= "Fecha: " . $created_at . "\n";
            
            // Cabeceras para asegurar mejor entrega
            $headers = "From: no-reply@hubathletics.com\r\n";
            $headers .= "Reply-To: " . $email . "\r\n";
            $headers .= "X-Mailer: PHP/" . phpversion();

            // Intentar enviar el correo (no bloquea la respuesta si falla)
            @mail($admin_email, $subject, $message_body, $headers);

            http_response_code(201);
            echo json_encode(array(
                "success" => true,
                "message" => "¡Bienvenido al HUB! Nos pondremos en contacto contigo pronto.",
                "data" => array(
                    "id" => $id,
                    "name" => $name,
                    "email" => $email,
                    "created_at" => $created_at
                )
            ));
        } else {
            http_response_code(503);
            echo json_encode(array("success" => false, "message" => "No se pudo crear el lead."));
        }
    } else {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Datos incompletos."));
    }
} elseif ($method == 'GET') {
    // Listar leads (opcional, para admin)
    $query = "SELECT * FROM leads ORDER BY created_at DESC";
    $stmt = $conn->prepare($query);
    $stmt->execute();
    $leads = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($leads);
} else {
    // Preflight CORS
    if ($method == 'OPTIONS') {
        http_response_code(200);
    } else {
        http_response_code(405);
    }
}
?>
