// Função para trocar a cor de fundo
function mudaCor() {
    // Obtém o elemento do corpo
    var body = document.body;

    // Define a nova cor de fundo
    body.style.backgroundColor = "#BECCC3";
}

// Obtém o botão
var botaoMudaCor = document.getElementById("mudaCor");

// Adiciona um ouvinte de evento para o clique
botaoMudaCor.addEventListener("click", mudaCor);

function show(){
    let nome = document.getElementById("nome1");
    let nome2 = document.getElementById("nome2");
    let imprimeNome = document.getElementById("result");

    imprimeNome.innerHTML = nome.value + " " + nome2.value;         //console.log(nome.value);
}

