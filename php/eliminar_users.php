<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['eliminar'])) {
    // Datos de conexión a la base de datos
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $dbname = 'helpaut';

    $conn = new mysqli($host, $user, $password, $dbname);

    // Verificar conexión
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    // Obtener el ID del paciente a eliminar
    $id_paciente = isset($_POST['id_paciente']) ? intval($_POST['id_paciente']) : 0;

    if ($id_paciente > 0) {
        // Preparar la consulta de eliminación
        $sqlEliminar = "DELETE FROM PACIENTES WHERE id_paciente = ?";
        $stmt = $conn->prepare($sqlEliminar);

        if ($stmt) {
            $stmt->bind_param("i", $id_paciente);

            if ($stmt->execute()) {
                echo "<script>alert('Usuario eliminado correctamente.');</script>";
            } else {
                echo "<script>alert('Error en la ejecución de la consulta: {$stmt->error}');</script>";
            }

            $stmt->close();
        } else {
            echo "<script>alert('Error al preparar la consulta: {$conn->error}');</script>";
        }
    } else {
        echo "<script>alert('ID inválido. No se puede eliminar.');</script>";
    }

    $conn->close();

    // Redirigir a la página principal
    echo "<script>window.location.href = './index_admin-users.php';</script>";
    exit;
}
?>