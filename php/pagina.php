<?php //esta pagina sirve como comprobacion de que se ha iniciado sesión correctamente

include("includes/header.php");

session_start();

if(!isset($_SESSION['username'])){
    header("Location: index.php");
}

?>
<?php include("includes/footer.php"); ?>
<br>
<h4>BIENVENIDO A TU CUENTA</h4>
<br>
<a href="logout.php">Desconectar</a> <!-- Nos redirige a la pagina de logout para cerrar la sesion y que nos envie al index.php -->

<?php include("includes/footer.php"); ?>