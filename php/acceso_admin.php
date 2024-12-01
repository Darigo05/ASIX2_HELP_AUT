<?php
include "conexion.php"; // Conexión a la base de datos
session_start();
error_reporting(0);

// Si ya está logueado, redirigir a la página de bienvenida
if (isset($_SESSION["username"])) {
    header("Location: ../index_admin-users.php");
    exit();
}

// Verificar si el formulario fue enviado
if (isset($_POST["submit"])) {
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $contrasena = $_POST["contrasena"];

    // Verificar si los campos no están vacíos
    if (empty($email) || empty($contrasena)) {
        echo "Por favor, completa todos los campos.";
        exit();
    }

    // Consulta para verificar las credenciales en la base de datos usando sentencia preparada
    $sql = "SELECT * FROM ADMIN WHERE email=?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, 's', $email);  // 's' para string
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    // Si se encontró un usuario con el email
    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        // Verificar si la contraseña es correcta
        if (password_verify($contrasena, $row["contrasena"])) {  
            // Credenciales correctas: iniciar sesión
            $_SESSION['username'] = $row['nombre'];
        
            // Redirigir al archivo bienvenido.html
            header("Location: ../index_admin-users.php");
            exit();
        } else {
            // Contraseña incorrecta
            $login_message = "Contraseña incorrecta.";
            header("Location: login.html?error=" . urlencode($login_message));
            exit();
        }
    } else {
        // Usuario no encontrado
        $login_message = "Usuario no encontrado.";
        header("Location: login.html?error=" . urlencode($login_message));
        exit();
    }
}
?>
