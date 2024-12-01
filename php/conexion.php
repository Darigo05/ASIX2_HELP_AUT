<?php 

$servername="localhost";
$username="root";
$password=""; 
$database="helpaut"; 

$conn = mysqli_connect($servername,$username,$password,$database);

if(!$conn){
    die("Conexión fallida");
}

?>