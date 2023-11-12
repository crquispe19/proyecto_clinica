<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "citasweb";  // El nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Conexión fallida: " . $conn->connect_error]));
}

// No necesitas imprimir mensajes aquí

// No olvides cerrar la conexión al finalizar tu script PHP si es necesario.
// $conn->close();
?>
