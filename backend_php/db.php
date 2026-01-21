<?php
// db.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

$host = "localhost";
$db_name = "u123456789_hubathletics"; // Cambiar por el nombre real en Hostinger
$username = "u123456789_user";         // Cambiar por el usuario real
$password = "TuPasswordSeguro123!";    // Cambiar por el password real

try {
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
    $conn->exec("set names utf8");
} catch(PDOException $exception) {
    echo json_encode(["success" => false, "message" => "Connection error: " . $exception->getMessage()]);
    exit;
}
?>
