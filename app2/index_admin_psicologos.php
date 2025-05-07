<?php 
include('php/mostrar_tabla_psicologos.php'); 
include('php/eliminar_psicologos.php'); 
include('php/filtro_psicologos.php'); 
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado de Pacientes</title>

    <!-- Incluir Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body class="bg-light">
    <div class="container my-5">
        <header class="text-center mb-4">
            <h1 class="display-4 text-warning">Gestión de Psicólogos</h1>
            <p class="lead text-muted">Administra, filtra y elimina psicólogos de manera eficiente.</p>
        </header>

        <!-- Filtro de búsqueda -->
        <div class="mb-4">
            <form method="GET" action="index_admin_psicologos.php" class="row g-3 p-3 border rounded shadow-sm bg-white">
                
                <div class="col-md-4">
                    <label for="filtro_id" class="form-label">Filtrar por ID:</label>
                    <input type="text" name="filtro_id" id="filtro_id" class="form-control" value="<?php echo isset($_GET['filtro_id']) ? htmlspecialchars($_GET['filtro_id']) : ''; ?>">
                </div>
                <div class="col-md-4">
                    <label for="filtro_nombre" class="form-label">Filtrar por Nombre:</label>
                    <input type="text" name="filtro_nombre" id="filtro_nombre" class="form-control" value="<?php echo isset($_GET['filtro_nombre']) ? htmlspecialchars($_GET['filtro_nombre']) : ''; ?>">
                </div>
                <div class="col-md-4">
                    <label for="filtro_email" class="form-label">Filtrar por Email:</label>
                    <input type="email" name="filtro_email" id="filtro_email" class="form-control" value="<?php echo isset($_GET['filtro_email']) ? htmlspecialchars($_GET['filtro_email']) : ''; ?>">
                </div>
                <div class="col-12">
                <form method="GET" action="index_admin_psicologos.php" class="row g-3 p-3 border rounded shadow-sm bg-white">
  <!-- Otros campos del formulario -->
  <button type="submit" class="btn btn-warning w-100">Aplicar Filtro</button>
</form>
                </div>
            </form>
        </div>

        <!-- Conexión y consulta a la base de datos -->
        <?php
        // Conexión a la base de datos
        $host = 'localhost';
        $user = 'root';
        $password = '';
        $dbname = 'helpaut'; // Cambiar al nombre real de la base de datos

        $conn = new mysqli($host, $user, $password, $dbname);

        // Verificar conexión
        if ($conn->connect_error) {
            die("Error de conexión: " . $conn->connect_error);
        }

        // Paginación: número de resultados por página
        $resultados_por_pagina = 10;
        $pagina = isset($_GET['pagina']) ? (int)$_GET['pagina'] : 1;
        $offset = ($pagina - 1) * $resultados_por_pagina;

        // Filtrar psicologos si se proporcionan los filtros
        $filtro_id = isset($_GET['filtro_id']) ? $_GET['filtro_id'] : '';
        $filtro_nombre = isset($_GET['filtro_nombre']) ? $_GET['filtro_nombre'] : '';
        $filtro_email = isset($_GET['filtro_email']) ? $_GET['filtro_email'] : '';

        // Consulta base
        $sqlPsicologos = "SELECT id_psicologo, nombre, apellidos, email FROM PSICOLOGOS WHERE 1=1";

        // Agregar filtros dinámicamente a la consulta
        if ($filtro_id) {
            $sqlPsicologos .= " AND id_psicologo LIKE '%" . $conn->real_escape_string($filtro_id) . "%'";
        }

        if ($filtro_nombre) {
            $sqlPsicologos .= " AND nombre LIKE '%" . $conn->real_escape_string($filtro_nombre) . "%'";
        }

        if ($filtro_email) {
            $sqlPsicologos .= " AND email LIKE '%" . $conn->real_escape_string($filtro_email) . "%'";
        }

        // Agregar LIMIT y OFFSET para la paginación
        $sqlPsicologos .= " LIMIT $resultados_por_pagina OFFSET $offset";

        // Ejecutar la consulta
        $resultPsicologos = $conn->query($sqlPsicologos);

        // Guardar los datos de los psicologo en una variable
        $psicologos = [];
        if ($resultPsicologos->num_rows > 0) {
            while ($row = $resultPsicologos->fetch_assoc()) {
                $psicologos[] = $row;
            }
        }

        // Obtener el total de pacientes para calcular el número total de páginas
        $sqlTotalPsicologos = "SELECT COUNT(*) AS total FROM PSICOLOGOS WHERE 1=1";
        $resultTotalPsicologos = $conn->query($sqlTotalPsicologos);
        $totalPsicologos = $resultTotalPsicologos->fetch_assoc()['total'];

        // Calcular el total de páginas
        $totalPaginas = ceil($totalPsicologos / $resultados_por_pagina);

        $conn->close(); // Cerrar la conexión después de ejecutar la consulta
        ?>

        <!-- Tabla de Pacientes -->
        <?php if (count($psicologos) > 0): ?>
        <div class="table-responsive">
            <table class="table table-striped table-hover table-bordered shadow-lg">
                <thead class="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($psicologos as $psicologo): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($psicologo['id_psicologo']); ?></td>
                        <td><?php echo htmlspecialchars($psicologo['nombre']); ?></td>
                        <td><?php echo htmlspecialchars($psicologo['apellidos']); ?></td>
                        <td><?php echo htmlspecialchars($psicologo['email']); ?></td>
                        <td>
                            <!-- Formulario para eliminar el psicologo -->
                            <form method="POST" action="index_admin_psicologos.php" class="d-inline">
                                <input type="hidden" name="id_psicologo" value="<?php echo $paciente['id_psicologo']; ?>">
                                <button type="submit" name="eliminar" class="btn btn-danger btn-sm">
                                    <i class="fas fa-trash-alt"></i> Eliminar
                                </button>
                            </form>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>

        <!-- Paginación -->
        <div class="d-flex justify-content-center">
    <nav aria-label="Page navigation">
        <ul class="pagination">
            <!-- Enlace de "Previous" -->
            <li class="page-item <?php echo ($pagina == 1) ? 'disabled' : ''; ?>">
                <a class="page-link border border-warning text-warning bg-transparent" href="?pagina=<?php echo $pagina - 1; ?>&filtro_id=<?php echo $filtro_id; ?>&filtro_nombre=<?php echo $filtro_nombre; ?>&filtro_email=<?php echo $filtro_email; ?>" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            
            <!-- Enlaces de las páginas -->
            <?php for ($i = 1; $i <= $totalPaginas; $i++): ?>
                <li class="page-item <?php echo ($i == $pagina) ? 'active' : ''; ?>">
                    <a class="page-link border border-warning <?php echo ($i == $pagina) ? 'bg-warning text-white' : 'bg-transparent text-warning'; ?>" href="?pagina=<?php echo $i; ?>&filtro_id=<?php echo $filtro_id; ?>&filtro_nombre=<?php echo $filtro_nombre; ?>&filtro_email=<?php echo $filtro_email; ?>">
                        <?php echo $i; ?>
                    </a>
                </li>
            <?php endfor; ?>

            <!-- Enlace de "Next" -->
            <li class="page-item <?php echo ($pagina == $totalPaginas) ? 'disabled' : ''; ?>">
                <a class="page-link border border-warning text-warning bg-transparent" href="?pagina=<?php echo $pagina + 1; ?>&filtro_id=<?php echo $filtro_id; ?>&filtro_nombre=<?php echo $filtro_nombre; ?>&filtro_email=<?php echo $filtro_email; ?>" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</div>


        <?php else: ?>
            <p class="alert alert-info">No hay pacientes registrados.</p>
        <?php endif; ?>
    </div>

    <!-- Incluir Bootstrap JS y dependencias -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/js_admin_psicologos.js"
</body>
</html>