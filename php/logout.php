<?php //la funcion que tiene esta pagina es cerrar la sesion que hay iniciada tras poner las credenciales correctamente en el login.

session_start();

session_destroy();

header("Location: ../login.html"); //nos redirige al index.php

?>