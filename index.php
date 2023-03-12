
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login de Acesso</title>

    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div id="Login">

        <div class="container"> 
                        
            <h1>Acesse sua Conta</h1>
                <form method="POST" action="autenticar.php">
                    <div>
                      <label> Nome: </label>
                      <input type="text" name="nome" placeholder="Insira seu nome" required>
                    </div></br>

                    <div>
                     <label> Email: </label>
                     <input type="text" name="email" placeholder="Insira seu Email" required>
                    </div></br>

                    <div>
                     <label> Senha: </label>
                     <input type="password" name="senha" placeholder="Insira sua Senha" required>
                    </div></br>

                    <div>
                     <button type="submit">Logar</button>
                    </div></br>

                    <div id="register-link" class="text-right mt-1" >
                     <a href="#" class="text-info">Cadastre-se</a>
                    </div>
                </form>   
            
        </div>
    </div>
</body>
</html>