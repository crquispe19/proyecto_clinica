<?php
session_start();
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Validar y almacenar datos en la base de datos
    $sql = "INSERT INTO usuarios (nombre, email, password) VALUES ('$nombre', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        // Inicio de sesión después del registro.
        $_SESSION["username"] = $nombre;

        echo json_encode(["success" => true, "message" => "¡Registro exitoso! Redirigiendo al inicio de sesión."]);
    } else {
        // Cambiando la respuesta para manejar caracteres especiales
        echo json_encode(["success" => false, "message" => "Error en el registro: " . htmlspecialchars($conn->error)]);
    }
}

// Cerrar conexión
$conn->close();
?>
