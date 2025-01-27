<?php
// Configurações do banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "empresa";

// Conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se houve erro na conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Recebe os dados do formulário
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$idade = $_POST['idade'];
$email = $_POST['email'];
$telefonePrincipal = $_POST['telefonePrincipal'];
$telefoneWhatsApp = $_POST['telefoneWhatsApp'];
$telefoneCorporativo = $_POST['telefoneCorporativo'];
$cpf = $_POST['cpf'];
$dataAdmissao = $_POST['dataAdmissao'];
$endereco = $_POST['endereco'];

// Prepara e executa a consulta para inserir os dados
$sql = "INSERT INTO funcionarios (nome, sobrenome, idade, email, telefone_principal, telefone_whatsapp, telefone_corporativo, cpf, data_admissao, endereco) 
        VALUES ('$nome', '$sobrenome', '$idade', '$email', '$telefonePrincipal', '$telefoneWhatsApp', '$telefoneCorporativo', '$cpf', '$dataAdmissao', '$endereco')";

if ($conn->query($sql) === TRUE) {
    echo "Funcionário cadastrado com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

// Fecha a conexão
$conn->close();
?>
