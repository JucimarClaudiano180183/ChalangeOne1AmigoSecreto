// criando a variavel do tipo lista  para armazenar o nome

let amigos = [];


function pegarValor(){
    let amigo = document.getElementById('amigo').value;
    

    if(!amigo){
        alert('Digite um nome válido');
        
    }else{
        amigos.push(amigo);
        LerNomes();
        console.log(amigos);
        
    }

    

}


//atribuir ação para o botão adcionar

function adicionarAmigo() {

        pegarValor();
        limparCampo();
      
        
        
        
}


function LerNomes() {
    
    listaAmigos = document.getElementById('listaAmigos');
    for(let i = 0; i < amigos.length; i++){
      var nome = amigos[i]
        
    }
    listaAmigos.innerHTML += nome += ' - ' ;
}

function LerTabela() {
     for(let i = 0; i < amigos.length; i++){
        console.log(amigos[i]);
        listaAmigos = amigos[i];
    }
    return listaAmigos;
}

function limparCampo() {
    let campo = document.querySelector('input')
    campo.value = '';
    
}





   
    






