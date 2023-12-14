function voltar(){
    window.location.href = "Home.html";
}


    function crioutudo2() {
        const auxAmostra2 = {
            nome: document.getElementById("name2").value,
            data: document.getElementById("txtData2").value,
            hora: document.getElementById("txtHour2").value,
            profundidade: document.getElementById("depth2").value,
            espacamento: document.getElementById("spacing2").value,
            info: document.getElementById("information2").value
        }
        const indicedesejado = 0;
        for(const i = 0 ; i < localStorage.getItem("amostras").length ; i++){
            if(indicedesejado === i){
                updateAmostra(auxAmostra2, indicedesejado)
                TelaAmostra()
            }
        }
    
    }

function salvar (){
const auxAmostra = {
    nome: document.getElementById("name").value,
    data: document.getElementById("txtData").value,
    hora: document.getElementById("txtHour").value,
    profundidade: document.getElementById("depth").value,
    espacamento: document.getElementById("spacing").value,
    info: document.getElementById("information").value
}
createAmostra(auxAmostra)
window.location.href = "Telafalsa.html";
}

// criando funções para a retorno e conversao, e para o envio das informações no array (amostras) para o localStorage
// linha 46: as ?? significam que se o retorno for null ou falso (indicando que o array nao existe no localStorage) ele retorna amostra = [] 
const getLocalStorage = () => JSON.parse(localStorage.getItem("amostras")) ?? [];
const setLocalStorage = (amostraS) => localStorage.setItem("amostras", JSON.stringify(amostraS));

// CRIAR (linha 50 até 54 e funções complementares nas linhas 46 e 47)
const createAmostra = (aux) => { // auxAmostra será passado como parametro e na função passará a ser aux
    const amostras = getLocalStorage(); // retorna o localStorage
    amostras.push(aux); // adiciona a amostra no array de amostras
    setLocalStorage(amostras); // envia para o localStorage 
}

// LENDO (linha 57 e função complementar na linha 46)
const readAmostra = () => getLocalStorage(); /// retornar o localStorage

// ATUALIZANDO (linhas 60 até 64 e funções complementares nas linhas 57 e 47)
const updateAmostra = (aux, indice) => {
    const amostras = readAmostra(); // retorna o localStorage
    amostras[indice] = aux; // dados atualizados sendo guardado no mesmo lugar que a amostra antiga
    setLocalStorage(amostras); // envia para o localStorage
}

// DELETANDO (linhas 67 até 71 e funções complementares nas linhas 57 e 57)
const deleteAmostra = (indice) => {
    const amostras = readAmostra(); // retorna o localStorage
    amostras.splice(indice, 1); // fatia o array a partir do indice e avança 1 posição (a propria amostra)
    setLocalStorage(amostras); // envia para o localStorage
}



function excluir(){
    const indicedesejado = 0;
    for(const i = 0 ; i < localStorage.getItem("amostras").length ; i++){
        if(indicedesejado === i){
            deleteAmostra(indicedesejado)
            voltar()
        }
    }
    
}  
    

function alterar(){
    window.location.href = "Criar2.html"
}



function TelaAmostra(){
    window.location.href = "Amostra.html";
   
}

