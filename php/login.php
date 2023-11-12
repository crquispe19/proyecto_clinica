<?php
session_start();
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Recuperar datos de la base de datos
    $sql = "SELECT * FROM usuarios WHERE nombre='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Inicio de sesión exitoso.
        $_SESSION["username"] = $username;

        echo json_encode(["success" => true, "message" => "¡Inicio de sesión exitoso!", "username" => $username]);
    } else {
        // Credenciales inválidas.
        echo json_encode(["success" => false, "message" => "Credenciales inválidas. Inténtalo de nuevo."]);
    }
}

// Cerrar conexión
$conn->close();
?>
