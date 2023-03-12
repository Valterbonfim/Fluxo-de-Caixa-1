<?php

date_default_timezone_set('America/Sao_Paulo');

$servidor = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'fluxo de caixa_1';


try{

    $pdo = new PDO ("mysql:dbname=$banco;host=$servidor","$usuario","$senha" );

} catch(Exception $e) {
    echo "Erro ao tentar conectar com o banco de dados ! <p> "  .$e ;

}
?>