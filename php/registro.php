<?php
include "conexion.php";

if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
} else {
    //echo "Conexión exitosa"; // Puedes quitar esto cuando ya no lo necesites
}

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturar los valores del formulario
    $nombre = $_POST["nombre"] ?? '';
    $apellidos = $_POST["apellidos"] ?? '';
    $email = $_POST["email"] ?? '';
    $contrasena = $_POST["contrasena"] ?? '';
    $cpassword = $_POST["cpassword"] ?? '';
    $account_type = $_POST["account_type"] ?? '';

    // Validar que todos los campos requeridos estén completos
    if (empty($nombre) || empty($apellidos) || empty($email) || empty($contrasena) || empty($account_type)) {
        echo '<script>alert("Por favor, llena todos los campos.");</script>';
        exit;
    }

    // Verificar que las contraseñas coinciden
    if ($contrasena !== $cpassword) {
        echo '<script>alert("Las contraseñas no coinciden. Por favor, verifica.");</script>';
        exit;
    }

    // Hashear la contraseña
    $hashed_password = password_hash($contrasena, PASSWORD_DEFAULT);

    // Comprobar si el correo ya existe en la base de datos
    $sql_check = "SELECT email FROM pacientes WHERE email = '$email' UNION SELECT email FROM psicologos WHERE email = '$email'";
    $result_check = mysqli_query($conn, $sql_check);

    if ($result_check && $result_check->num_rows > 0) {
        echo '<script>alert("Este correo ya está registrado. Por favor, usa otro.");</script>';
        exit;
    }

    // Decidir en qué tabla insertar según el tipo de cuenta
    $sql_insert = "";
    if ($account_type === "paciente" || $account_type === "padre_hijo") {
        $sql_insert = "INSERT INTO pacientes (nombre, apellidos, email, contrasena) VALUES ('$nombre', '$apellidos', '$email', '$hashed_password')";
    } elseif ($account_type === "psicologo") {
        $sql_insert = "INSERT INTO psicologos (nombre, apellidos, email, contrasena) VALUES ('$nombre', '$apellidos', '$email', '$hashed_password')";
    } else {
        echo '<script>alert("Por favor, selecciona un tipo de cuenta válido.");</script>';
        exit;
    }

    // Ejecutar la consulta de inserción
    if (mysqli_query($conn, $sql_insert)) {
        echo '<script>
                alert("Usuario ' . $nombre . ', te has registrado correctamente.");
                window.location.href = "Login.html";
              </script>';
    } else {
        die("Error al registrar el usuario: " . mysqli_error($conn));
    }
}

$conn->close();
?>
