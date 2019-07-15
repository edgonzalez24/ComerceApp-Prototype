<?php

$to = "edgoca2498@gmail.com";

$from = $_POST ['user']['email'];
$name = $_POST ['user'] ['nombre'];
$message = $_POST ['user']['mensaje'];


// Conexion a la base de datos

$connect =   mysqli_connect("localhost", "username", "passworduser", "tdb") or die('Ha ocurrido un error durante la conexión ' . mysqli_error($connect));

$connect->set_charset("utf8");

$query = "INSERT INTO leads (nombre, correo, mensaje) VALUES('".$name. "', '".$from."',  '".$message."');";

mysqli_query($connect, $query);


$html = <<<HTML
<!DOCTYPE html>
<html>
  <head><meta http-equiv="Content-Type" content="text/html; charset=gb18030">
    
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Envio de formulario de contacto</title>
      <style>

      </style>
  </head>
  <body>
      <div style="  
          background-color: #fefcfc;
          width: 80%;
          margin-left: 10%;" >

        <div style="color: #000; font-size: 35px; text-align: center; font-weight: bold; padding-top: 30px; ">
          Hola, <br>
        </div>
        <div style="margin: 20px 0; font-size: 14px; text-align: center; padding: 0 1em;">
        La siguiente persona ha llenado el formulario de contacto en el sitio web <br><br>
        
          <div style="margin-top: 20px">
              
          </div>
        <div style="margin-top: 10px">
            Nombre: {$name} <br> <br>
              
          </div>
          
        <div style="margin-top: 10px">
          Email: {$from} <br> <br>
              
          </div>
        <div style="margin-top: 10px">
          Mensaje: {$message} <br><br>
              
          </div>
              
          </div>
          
              
          </div>

        <br> 
        </div>
    

      </div>
  </body>
</html>