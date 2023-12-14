function TelaLogin(){
    window.location.href = "Login.html";
}

function TelaHome(){
    window.location.href = "Home.html";
}

function TelaCriar(){
    window.location.href = "Criar.html";
}


function criou(){
    window.location.href = "Home.html";
}

console.log("carregou")
let cadastro = document.getElementById("cadastro"); 

cadastro.addEventListener("submit", (evento) => {
    

    let nome = document.getElementById("firstname").value;
    let sobrenome = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let numero = document.getElementById("number").value;
    let senha = document.getElementById("password").value;
    let confirmarSenha = document.getElementById("confirmpassword").value;

    // console.log(nome);
    // console.log(sobrenome);
    // console.log(email);
    // console.log(numero);
    // console.log(senha);
    // console.log(confirmarSenha);

    let usuarios = new Array();
    if(localStorage.hasOwnProperty("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
    if(senha === confirmarSenha){
        usuarios.push({nome, sobrenome, email, numero, senha}); // os nomes das chaves são iguais ao valores, entao podemos exemplificar dessa forma
        localStorage.setItem("usuarios", JSON.stringify(usuarios));       
    }
    else{
        alert("Senhas diferentes");
        window.location.href = "Cadastro.html";
    } 
});



function realizarLogin(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;
    
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    let usuarioLocalizado = usuarios.find(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    if(usuarioLocalizado){
        window.location.href = "Home.html";
        alert("Login bem-sucedido!");
    }
    else{
        alert("E-mail ou senha incorretos!");
    }
}