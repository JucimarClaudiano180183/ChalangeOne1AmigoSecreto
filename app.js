// criando a variavel do tipo lista  para armazenar o nome

let amigos = [];

function pegarValor(){
    let amigo = document.getElementById('amigo').value;
    return amigo;
}

//atribuir ação para o botão adcionar

function adicionarAmigo() {

    amigos.push(pegarValor());
    console.log(amigos);

}

adicionarAmigo();






