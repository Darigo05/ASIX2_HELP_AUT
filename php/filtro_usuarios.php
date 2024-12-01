<?php
// Conexión a la base de datos
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'helpaut'; // Cambia este nombre por el de tu base de datos real

$conn = new mysqli($host, $user, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Variables para los filtros
$filtro_id = isset($_GET['filtro_id']) ? $_GET['filtro_id'] : '';
$filtro_nombre = isset($_GET['filtro_nombre']) ? $_GET['filtro_nombre'] : '';
$filtro_email = isset($_GET['filtro_email']) ? $_GET['filtro_email'] : '';

// Paginación: número de resultados por página
$resultados_por_pagina = 10;
$pagina = isset($_GET['pagina']) ? (int)$_GET['pagina'] : 1;
$offset = ($pagina - 1) * $resultados_por_pagina;

// Consulta base
$sqlPacientes = "SELECT id_paciente, nombre, apellidos, email FROM PACIENTES WHERE 1=1";

// Agregar filtros dinámicamente a la consulta
if ($filtro_id) {
    $sqlPacientes .= " AND id_paciente LIKE '%" . $conn->real_escape_string($filtro_id) . "%'";
}

if ($filtro_nombre) {
    $sqlPacientes .= " AND nombre LIKE '%" . $conn->real_escape_string($filtro_nombre) . "%'";
}

if ($filtro_email) {
    $sqlPacientes .= " AND email LIKE '%" . $conn->real_escape_string($filtro_email) . "%'";
}

// Agregar LIMIT y OFFSET para la paginación
$sqlPacientes .= " LIMIT $resultados_por_pagina OFFSET $offset";

// Ejecutar la consulta
$resultPacientes = $conn->query($sqlPacientes);

// Guardar los datos de los pacientes en una variable
$pacientes = [];
if ($resultPacientes->num_rows > 0) {
    while ($row = $resultPacientes->fetch_assoc()) {
        $pacientes[] = $row;
    }
}

// Obtener el total de pacientes para calcular el número total de páginas
$sqlTotalPacientes = "SELECT COUNT(*) AS total FROM PACIENTES WHERE 1=1";
if ($filtro_id) {
    $sqlTotalPacientes .= " AND id_paciente LIKE '%" . $conn->real_escape_string($filtro_id) . "%'";
}
if ($filtro_nombre) {
    $sqlTotalPacientes .= " AND nombre LIKE '%" . $conn->real_escape_string($filtro_nombre) . "%'";
}
if ($filtro_email) {
    $sqlTotalPacientes .= " AND email LIKE '%" . $conn->real_escape_string($filtro_email) . "%'";
}

$resultTotalPacientes = $conn->query($sqlTotalPacientes);
$totalPacientes = $resultTotalPacientes->fetch_assoc()['total'];

// Calcular el total de páginas
$totalPaginas = ceil($totalPacientes / $resultados_por_pagina);

// Cerrar la conexión
$conn->close();
?>
