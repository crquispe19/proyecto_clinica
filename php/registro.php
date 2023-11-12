<?php
session_start();
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {    
    $tipoDocumento = $_POST["tipoDocumento"];
    $numeroDocumento = $_POST["numeroDocumento"];
    $apellidos = $_POST["apellidos"];
    $nombres = $_POST["nombres"];
    $sexo = $_POST["sexo"];
    $direccion = $_POST["direccion"];
    $correo = $_POST["correo"];
    $celular = $_POST["celular"];
    $contrasena = $_POST["contrasena"];

    // Validar y almacenar datos en la base de datos
    $sql = "INSERT INTO usuarios (tipoDocumento, numeroDocumento, apellidos, nombres, sexo, direccion, correo, celular, contrasena, estado) 
            VALUES ('$tipoDocumento', '$numeroDocumento', '$apellidos', '$nombres', '$sexo', '$direccion', '$correo', '$celular', '$contrasena', '1')";

    if ($conn->query($sql) === TRUE) {
        // Inicio de sesión después del registro.
        $_SESSION["numeroDocumento"] = $numeroDocumento;

        echo json_encode(["success" => true, "message" => "¡Registro exitoso! Redirigiendo al inicio de sesión."]);
    } else {
        // Cambiando la respuesta para manejar caracteres especiales
        echo json_encode(["success" => false, "message" => "Error en el registro: " . htmlspecialchars($conn->error)]);
    }
}

// Cerrar conexión
$conn->close();
?>
