<?php
// Conexión a la base de datos
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'helpaut'; // Cambiar al nombre real de la base de datos

$conn = new mysqli($host, $user, $password, $dbname);

// Verificar conexiónz
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Consultar pacientes
$sqlPacientes = "SELECT id_paciente, nombre, apellidos, email FROM PACIENTES";
$resultPacientes = $conn->query($sqlPacientes);

// Guardar los datos de los pacientes y el nombre del administrador en variables
$pacientes = [];
if ($resultPacientes->num_rows > 0) {
    while ($row = $resultPacientes->fetch_assoc()) {
        $pacientes[] = $row;
    }
}

// Pasar los datos a la vista HTML (no directamente en este archivo PHP)
?>
