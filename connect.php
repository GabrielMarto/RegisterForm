<?php
$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$marca = $_POST['marca'];
$modelo = $_POST['modelo'];
$observacao = $_POST['observacao'];

$conn = new mysqli('localhost', 'root', '', 'yugioh');
if($conn->connect_error){
    die('A conexão falhou: '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into kaiba(nome, telefone, marca, modelo, observacao)
    values(?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss",$nome, $telefone, $marca, $modelo, $observacao);
    $stmt->execute();
    echo "Registro concluído";
    $stmt->close();
    $conn->close();
   header("Refresh: 1; atend_reg.html");
}
?>  