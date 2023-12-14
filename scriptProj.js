
function aqui(){
    window.location.href = "Cadastro.html";
}

function voltar(){
    window.location.href = "Home.html";
}

function entrar(){
    window.location.href = "Home.html";
}

function amostra(){
    window.location.href = "Amostra.html";
}

function Login(){
    window.location.href = "Login.html";
}

function entrou(){ 
    //se houvesse banco de dados para analisar se tanto o e-mail e a senha estão corretos
    let enter = document.getElementById("email").value;
    localStorage.setItem("email",enter);
    document.getElementById("email").value = '';
    let enter2 = document.getElementById("senha").value;
    localStorage.setItem("senha",enter2);
    document.getElementById("senha").value = '';
}

function aparece(){  //criar coisas e colocar na tela de home
    let guar = document.getElementById("coloca").value
    localStorage.setItem("Men",guar)
    apa()
}

function apa(){ //fica aparecendo na tela
    document.getElementById("fala").innerHTML = localStorage.getItem("Men")
}

window.addEventListener('load', () => { //fica carregando infinitamente na tela
    apa();
});



