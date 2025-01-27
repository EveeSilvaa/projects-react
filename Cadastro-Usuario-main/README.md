---

# Sistema de Cadastro de Usúarios

Este projeto é um sistema simples de cadastro de funcionários desenvolvido em HTML, PHP e MySQL. Este README fornecerá as instruções necessárias para que você possa configurar e utilizar o sistema, mesmo que não tenha participado do desenvolvimento.

## Pré-requisitos

Antes de começar, você precisará do seguinte:

1. *Servidor Local*: Instale o XAMPP (ou WAMP) para configurar um servidor local que suporte PHP e MySQL.
   - [Download XAMPP](https://www.apachefriends.org/pt_br/index.html)

2. *Navegador Web*: Para acessar a interface do sistema.

## Configuração do Ambiente

### 1. Instalar o XAMPP

- Baixe e instale o XAMPP seguindo as instruções do instalador.
- Após a instalação, abra o *Painel de Controle XAMPP* e inicie os serviços *Apache* e *MySQL*.

### 2. Criar o Banco de Dados

1. Abra seu navegador e acesse http://localhost/phpmyadmin.
2. Clique em *Novo* para criar um novo banco de dados.
3. Nomeie o banco de dados como funcionarios_db e clique em *Criar*.
4. Clique na aba *SQL* e insira o seguinte código para criar a tabela funcionarios:

   sql
   CREATE TABLE funcionarios (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nome VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       telefone VARCHAR(20) NOT NULL,
       cargo VARCHAR(100) NOT NULL
   );
   

5. Clique em *Executar* para criar a tabela.

### 3. Configurar os Arquivos do Projeto

1. Navegue até a pasta onde você instalou o XAMPP. Normalmente, ela está localizada em C:\xampp.
2. Dentro da pasta xampp, vá até htdocs. Essa pasta é onde você deve colocar os arquivos do seu projeto.
3. Crie uma nova pasta chamada cadastro_funcionarios.
4. Dentro dessa nova pasta, crie os seguintes arquivos:

   - *index.html*: Este arquivo contém o formulário de cadastro de funcionários.
   - *salvar_funcionario.php*: Este arquivo processa a inserção dos dados no banco de dados.

### 4. Alterar as Configurações de Conexão do Banco de Dados

*No arquivo salvar_funcionario.php*, você precisará alterar as informações de conexão com o banco de dados. Localize e modifique as seguintes linhas de código:

php
$servername = "localhost";  // Normalmente, isso não precisa ser alterado
$username = "root";          // Usuário padrão do MySQL no XAMPP é "root"
$password = "";              // Senha padrão do MySQL no XAMPP é vazia
$dbname = "funcionarios_db"; // Certifique-se de que o nome do banco de dados está correto


- *$servername*: Se você estiver usando um servidor diferente, pode precisar alterar este valor.
- *$username* e *$password*: Ajuste conforme necessário se você tiver configurado um usuário e senha diferentes.
- *$dbname*: Certifique-se de que este nome corresponde ao banco de dados que você criou.

### 5. Executar o Projeto

1. Abra seu navegador e acesse http://localhost/cadastro_funcionarios/index.html para abrir o formulário de cadastro.
2. Preencha os campos e clique em *Salvar* para enviar os dados ao banco de dados.
3. Após a inserção, você pode verificar se os dados foram salvos acessando o phpMyAdmin novamente (http://localhost/phpmyadmin) e visualizando a tabela funcionarios.

### 6. Depuração

Se algo não funcionar como esperado:

- *Verifique a exibição de erros do PHP*: Ative a exibição de erros adicionando o seguinte código no início do arquivo salvar_funcionario.php:

  php
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
  

- *Verifique o log do MySQL: No Painel de Controle do XAMPP, clique em **Logs* ao lado de MySQL para ver se há erros.

## Conclusão

Com este guia, você deve ser capaz de configurar e utilizar o sistema de cadastro de funcionários. Caso tenha dúvidas, consulte a documentação do XAMPP ou do PHP para mais informações.
